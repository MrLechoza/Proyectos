import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bolt capitalize text-center">{task.title}</h1>
      <p className="text-[#ffffffa1] text-sm pt-1 pb-2 text-center "> {task.description} </p>
      <div className="flex justify-center items-center">
        <button className="bg-red-500 px-2 py-1 rounded-md nt-4 hover:bg-red-400 " onClick={() => deleteTask(task.id)}> Eliminar tarea</button>
      </div>  
    </div>
  );
}

export default TaskCard;