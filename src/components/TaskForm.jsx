import { useState, useContext } from "react";
import { TaskContext } from '../context/TaskContext'

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (!title) {
      setTitleError(true);
      isValid = false;
    } else {
      setTitleError(false);
    }

    if (!description) {
      setDescriptionError(true);
      isValid = false;
    } else {
      setDescriptionError(false);
    }

    if (!isValid) {
      return;
    }

    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
    setModalOpen(false);
  };

  return (
    <div className="fixed right-4 bottom-4">
      <button onClick={() => setModalOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          className="size-9"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 m-3">
          <form
            onSubmit={handleSubmit}
            className="shadow-xl bg-white p-7 rounded-md w-[500px]"
          >
            <h1 className="flex text-2xl font-bolt text-black mb-3">
              Crear una tarea
            </h1>

            <div className="relative mb-3">
              <input
                placeholder=" Escribe tu tarea"
                onChange={(e) => setTitle(e.target.value)}
                value={title}

                className={`bg-slate-100 p-1 rounded-md w-full  ${
                  titleError
                    ? "border border-red-700"
                    : "border border-gray-100"
                }`}
              /> 
            </div>

            <div className="relative mb-2">
              <textarea
                placeholder=" Escribe la descripcion de la tarea"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className={`bg-slate-100 rounded-md  w-full  ${
                  descriptionError
                    ? "border border-red-700 "
                    : "border border-gray-100"
                }`}
              ></textarea>
            </div>
            <button
              className="bg-black text-white p-2 rounded-md hover:bg-[#242424] transition duration-300  delay-0 ease-in-out hover:-translate-y-1 hover:scale-100"
              onClick={handleSubmit}
            >
              Guardar
            </button>
            <button 
              onClick={() => setModalOpen(false)}
              className="bg-[#de1212b4] text-white p-2 ml-3 rounded-md hover:bg-[#de121284] transition duration-300  delay-0 ease-in-out hover:-translate-y-1 hover:scale-100">Cancelar</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskForm;