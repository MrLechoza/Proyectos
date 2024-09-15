import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let error = false;

    if (title.trim() === "") {
      setTitleError(true);
      error = true;
    } else {
      setTitleError(false);
    }

    if (description.trim() === "") {
      setDescriptionError(true);
      error = true;
    } else {
      setDescriptionError(false);
    }

    if (error) {

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
          fill="#348F50"
          class="size-9"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
          <form
            onSubmit={handleSubmit}
            className=" bg-[rgb(32,30,41)] p-7 mb-2 rounded-md w-[500px]"
          >
            <button 
              onClick={() => setModalOpen(false)}
              className="absolute justify-between ml-96 text-white text-[30px] font-bold">&times;</button>
            <h1 className="flex text-2xl font-bolt text-white m-5">
              Crear una tarea
            </h1>

            <div className="relative mb-4">
              <input
                placeholder=" Escribe tu tarea"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                onBlur={() => setTitleError(title.trim() === "")}
                onFocus={() => setTitleError(false)}
                className={`bg-slate-300 p-1 mb-3 rounded-md w-full  ${
                  titleError
                    ? "border border-red-700"
                    : "border border-gray-100"
                }`}
              />
              {titleError && (
                <div className="absolute top-9 left-0 flex items-center text-red-700 text-sm mt-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="size-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 //1 1 0 0 0 0 2Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  El campo no puede estar vacio
                </div>
              )}
            </div>

            <div className="relative mb-4 ">
              <textarea
                placeholder=" Escribe la descripcion de la tarea"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                onBlur={() => setDescriptionError(description.trim() === "")}
                onFocus={() => setDescriptionError(false)}
                className={`bg-slate-300 rounded-md  w-full  ${
                  descriptionError
                    ? "border border-red-700 "
                    : "border border-gray-100"
                }`}
              ></textarea>
              {descriptionError && (
                <div className="absolute top-11 left-0 flex items-center text-red-700 text-sm mt-2 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="size-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 //1 1 0 0 0 0 2Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  El campo no puede estar vacio
                </div>
              )}
            </div>
            <button
              className="bg-slate-300 p-2 mt-2 rounded-md hover:bg-[#a7a7a7] transition duration-300  delay-300 ease-in-out hover:-translate-y-1 hover:scale-100"
              onClick={handleSubmit}
            >
              Guardar
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskForm;
