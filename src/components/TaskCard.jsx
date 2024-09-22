import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  const { editTask } = useContext(TaskContext);
  const [road, setRoad] = useState(task.description);
  const [modalOpen, setModalOpen] = useState(false);

  const handleEdit = () => {
    console.log(`Editando la tarea ${task.title} con la descripcion ${road}`);
    setModalOpen(true);
  };

  const handleSaveAndClose = () => {
    console.log("Se está llamando a handleSaveAndClose");
    editTask(task.id, task.title, road);
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    setRoad(e.target.value);
  };

  return (
    <div className="bg-gray-100 shadow-md rounded-xl mx-auto p-4  size-[350px]">
      <h1 className="text-xl font-bold text-center capitalize mb-2 border-b-4">
        {task.title}
      </h1>
      <p className="text-gray-600 overflow-hidden capitalize h-[240px]  text-ellipsis">
        {task.description}
      </p>
      <div className="flex gap-2 place-content-center">
        <button
          className="my-2 bg-emerald-600 hover:bg-emerald-500 text-white text-justify px-4 py-1 rounded-md transition duration-300  delay-0 ease-in-out hover:-translate-y-1 hover:scale-100"
          onClick={handleEdit}
        >
          Editar
        </button>
        {modalOpen && (
          <div className="fixed inset-0 size-[500px] justify-items-center gap-4 grid m-auto rounded-md shadow-md bg-gray-100">
            <h1 className="text-xl font-bold capitalize m-4  justify-center items-center">
              {task.title}
            </h1>
            <textarea
              className="text-gray-600 overflow-hidden h-[350px] w-[400px] capitalize text-ellipsis border-2 rounded-md bg-gray-50"
              value={road}
              onChange={handleInputChange}
            />
            <div className="flex gap-2">
              <button
                className=" mb-5 bg-emerald-600 hover:bg-emerald-500 text-white text-justify px-4  rounded-md transition duration-300  delay-0 ease-in-out hover:-translate-y-1 hover:scale-100"
                onClick={handleSaveAndClose}
              >
                Guardar
              </button>
              <button
                onClick={() => setModalOpen(false)}
                className="mb-5 bg-red-500 hover:bg-red-400 text-white text-justify px-4  rounded-md transition duration-300  delay-0 ease-in-out hover:-translate-y-1 hover:scale-100"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
        <button
          className="my-2 bg-red-500 hover:bg-red-400 text-white text-justify px-4 py-1 rounded-md transition duration-300  delay-0 ease-in-out hover:-translate-y-1 hover:scale-100"
          onClick={() => deleteTask(task.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
