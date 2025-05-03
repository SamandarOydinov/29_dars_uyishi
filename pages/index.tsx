// pages/index.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await axios.get('/api/todos');
    setTodos(res.data);
  };

  const addTodo = async () => {
    if (!text.trim()) return;
    await axios.post('/api/todos', { text });
    setText('');
    fetchTodos();
  };

  const toggleComplete = async (id: number) => {
    await axios.put('/api/todos', { id });
    fetchTodos();
  };

  const deleteTodo = async (id: number) => {
    await axios.delete('/api/todos', { data: { id } });
    fetchTodos();
  };

  return (
    <>
      <div>
       <main>
         <h1 className="text-3xl text-center">Image Component</h1>
         <Image
           src="https://picsum.photos/200/200"
           alt="Example alternative"
           width={400}
           height={400}
         />
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla impedit repellat architecto quidem ea explicabo, quos sequi? Facere dicta accusamus sunt, illo ipsam, sint reiciendis, unde natus ipsa suscipit id!</p>
       </main>
     </div>
      <main className="max-w-xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">📝 To-Do List</h1>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            className="flex-1 border rounded px-2 py-1"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add new todo"
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-4 py-1 rounded"
          >
            Add
          </button>
        </div>
  
        <ul className="space-y-2">
          {todos.map((todo: any) => (
            <li
              key={todo.id}
              className="flex justify-between items-center border rounded px-2 py-1"
            >
              <span
                onClick={() => toggleComplete(todo.id)}
                className={`cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''}`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div>
//       <main>
//         <h1 className="text-3xl text-center">Image Component</h1>
//         <Image
//           src="https://picsum.photos/200/200"
//           alt="Example alternative"
//           width={400}
//           height={400}
//         />
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla impedit repellat architecto quidem ea explicabo, quos sequi? Facere dicta accusamus sunt, illo ipsam, sint reiciendis, unde natus ipsa suscipit id!</p>
//       </main>
//     </div>
//   );
// }
