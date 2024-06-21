import Image from "next/image";
import TaskList from "./components/TasksList";

async function getTasks() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const tasks = await res.json();
  return tasks;
}

export default async function Home() {
  const tasks = await getTasks();
  return (
    <>
      <h1 className="text-2xl mt-8 text-center font-bold mb-4">Task List</h1>
      <TaskList tasks={tasks} />
    </>
  );
}
