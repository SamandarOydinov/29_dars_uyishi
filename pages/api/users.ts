import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(200).json({ message: "Hey, hello!" });
    } else if (req.method === 'POST') {
        const data = req.body;
        res.status(201).json({ message: "Data received", data })
    } else {
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
};