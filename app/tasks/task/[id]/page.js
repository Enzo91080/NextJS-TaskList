import Link from "next/link";

async function getTask(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    cache: "no-store",
  });
  const task = await res.json();
  return task;
}

export async function generateMetadata({ params }) {
  const task = await getTask(params.id);
  return {
    title: `Détails de la tâche ${task.id}`,
    description: task.title,
  };
}

export default async function TaskPage({ params }) {
  const { id } = params;
  const task = await getTask(id);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">Détails de la tâche</h1>
        {/* Lien pour voir les tâches de cet utilisateur */}
        <Link href={`/tasks/user/${task.userId}`}>
          <span className="text-blue-600 hover:underline">
            Voir les tâches de cet utilisateur
          </span>
        </Link>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <p className="text-lg font-semibold">ID: {task.id}</p>
        <p className="text-lg font-semibold">Titre: {task.title}</p>
        <p className="text-lg font-semibold">
          Terminé : {task.completed ? "Oui" : "Non"}
        </p>
      </div>
    </div>
  );
}
