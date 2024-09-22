import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/task.js";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    const newTask = [
      ...tasks,
      {
        title: task.title,
        id: tasks.length + 1,
        description: task.description,
      },
    ];
    setTasks(newTask);
    localStorage.setItem("tasks", JSON.stringify(newTask));
  }

  function editTask(taskId, newTitle, newDescription) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, title: newTitle, description: newDescription };
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  function deleteTask(taskId) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  useEffect(() => {
    const savedTask = JSON.parse(localStorage.getItem("tasks"));
    if (savedTask) {
      setTasks(savedTask);
    } else {
      setTasks(data);
    }
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
        editTask,
      }}
    >
      { props.children }
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
