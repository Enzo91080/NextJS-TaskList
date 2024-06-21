// app/components/TaskList.js

import Link from 'next/link';
import Head from 'next/head';

async function getTasks() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`, { cache: 'no-store' });
  const tasks = await res.json();
  return tasks;
}


export const metadata = {
  title: 'Task List',
  description: 'Liste des tâches récupérées depuis l\'API JSONPlaceholder.',
};


export default async function TaskList({ taskByUser }) {
  // Utilisation des tâches passées en props si disponibles, sinon, charger les tâches via l'API
  const tasksToDisplay = taskByUser || await getTasks();

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      <div className="max-h-96 overflow-y-auto">
        <ul className="space-y-4">
          {tasksToDisplay.map((task) => (
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
