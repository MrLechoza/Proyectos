import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";


function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  const { editTask } = useContext(TaskContext);
  const [road, setRoad] = useState(task.description);
  const [modalOpen, setModalOpen] = useState(false);

  const handleEdit = () => {
    setModalOpen(true);
  };

  const handleSave = () => {
    console.log("Se está llamando a handleSaveAndClose")
    editTask(task.title, { description: road });
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    setRoad(e.target.value);
  };

  return (
    <div className="bg-gray-100 shadow-md rounded-xl mx-auto p-4  size-[350px]">
      <h1 className="text-xl font- font-bold text-center mb-2 border-b-4">
        {task.title}
      </h1>
      <p className="text-gray-600 overflow-hidden h-[240px]  text-ellipsis">
        {task.description}
      </p>
      <button
        className="ml-auto my-2 bg-emerald-600 text-white text-justify px-4 py-1 rounded-md "
        onClick={handleEdit}
      >
        Editar
      </button>
      {modalOpen && (
        <div className="fixed inset-0 size-[500px] justify-items-center grid m-auto rounded-md shadow-md bg-gray-100">
          <h1 className="text-xl font- font-bold text-center mb-2 border-b-4">
            {task.title}
          </h1>
          <textarea
            className="text-gray-600 overflow-hidden h-[350px] w-[400px]  text-ellipsis border-2"
            value={road}
            onChange={handleInputChange}
          />
          <button
            className="mb-5 bg-emerald-600 text-white text-justify px-4  rounded-md"
            onClick={handleSave}
          >
            Guardar
          </button>
        </div>
      )}
      <button
        className="ml-auto my-2 bg-red-500 text-white text-justify px-4 py-1 rounded-md "
        onClick={() => deleteTask(task.id)}
      >
        Eliminar
      </button>
    </div>
  );
}

export default TaskCard;

