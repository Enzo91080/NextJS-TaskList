// app/task/[id]/page.js

import TaskList from "@/app/components/TasksList";
async function getTasksByUser(userId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${userId}`,
    {
      cache: "no-store",
    }
  );
  const tasks = await res.json();
  return tasks;
}


export const metadata = {
  title: "Tâches par utilisateur",
  description: "Liste des tâches récupérées depuis l'API JSONPlaceholder.",
};


export default async function TaskPage({ params }) {
  const { id } = params;

  // Charger les tâches spécifiques à l'utilisateur en fonction de l'ID
  const tasksByUser = await getTasksByUser(id);

  return <TaskList tasks={tasksByUser} />;
}
