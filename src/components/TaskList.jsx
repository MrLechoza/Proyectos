import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-black  text-4xl font-bold text-center m-10">No hay tareas aun. . .</h1>;
  }

  return (
    <div className="grid 2xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;