import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'todos.json');

const readTodos = () => {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

const writeTodos = (todos: any[]) => {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;

  switch (method) {
    case 'GET': {
      const todos = readTodos();
      res.status(200).json(todos);
      break;
    }
    case 'POST': {
      const { text } = req.body;
      if (!text) return res.status(400).json({ error: 'Text is required' });

      const todos = readTodos();
      const newTodo = { id: Date.now(), text, completed: false };
      todos.push(newTodo);
      writeTodos(todos);
      res.status(201).json(newTodo);
      break;
    }
    case 'PUT': {
      const { id } = req.body;
      let todos = readTodos();
      todos = todos.map((todo: { id: any; completed: any; }) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      );
      writeTodos(todos);
      res.status(200).json({ message: 'Todo updated' });
      break;
    }
    case 'DELETE': {
      const { id } = req.body;
      let todos = readTodos();
      todos = todos.filter((todo: { id: any; }) => todo.id !== id);
      writeTodos(todos);
      res.status(200).json({ message: 'Todo deleted' });
      break;
    }
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
