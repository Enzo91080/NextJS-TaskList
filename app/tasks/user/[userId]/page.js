import TaskList from "@/app/components/TasksList";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `Tasks of user ${params.userId}`,
    description: `Tasks of user ${params.userId}`,
  };
}

const getTasks = async (id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${id}`
  );
  const tasks = await res.json();
  return tasks;
};

export default async function TaskListByUser({ params }) {
  const tasks = await getTasks(params.userId);

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Tâches de {params.userId}</h1>
      {/* Compte des éléments */}
      <TaskList tasks={tasks} />
    </>
  );
}
