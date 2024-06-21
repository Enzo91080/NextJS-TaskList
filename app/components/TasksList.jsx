// app/components/TaskList.js

import Link from 'next/link';
import Head from 'next/head';

export default async function TaskList({ tasks }) {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="max-h-96 overflow-y-auto">
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li key={task.id} className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Link href={`/tasks/task/${task.id}`}>
                <span className="block text-lg font-semibold text-blue-600 hover:underline">
                  {task.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
