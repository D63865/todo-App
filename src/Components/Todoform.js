import Todos from "./Todos";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

export default function Todoform({ todosArray, deleteTodo, addTodo }) {
  let [newTodo, setNewTodo] = useState({
    id: "",
    title: "",
    description: "",
    category: "",
    done: false,
    date: new Date(),
  });

  useEffect(() => {
   
  }, [newTodo]);

  const handleSubmit = (e) => {
     e.preventDefault();
    if (newTodo.title === "") {
      toast.error("Title Fields are required");
    } else if (newTodo.description === "") {
      toast.error("Description Fields are required");
    } else {
      setNewTodo({ ...newTodo, id: todosArray[todosArray.length - 1].id + 1 });
      //Update our todoArray

      addTodo(newTodo);
      toast.success("Successfully toasted!");
    }
  };
  const options = ["Select", "Work", "Home", "School", "Other"];
  return (
    <div className="flex  mt-20">
      <div className="w-2/5 ">
        <div className="fixed left-0  px-28 border-r-2 border-teal-600">
          <div className="mx-auto   h-9/12 place-items-center  ">
            <img
              src="image\todo4.png"
              alt="Logo"
              className="justify-center h-28 w-1/5 my-10 rounded-lg  mx-48 "
            />

            <form className="flex flex-col mx-auto justify-center">
              <span className="text-lg font-serif font-semibold">Title:</span>
              <input
                type="text"
                className="border border-2 rounded mb-4 h-8 py-1 px-1"
                placeholder=" Todo Title"
                value={newTodo.title}
                onChange={(e) => {
                  setNewTodo({ ...newTodo, title: e.target.value });
                }}
              />
              <span className="text-lg font-serif font-semibold">
                Description:
              </span>
              <textarea
                className="border border-2 mb-4 rounded px-1 py-1"
                placeholder="Todo Description"
                rows="4"
                value={newTodo.description}
                onChange={(e) => {
                  setNewTodo({ ...newTodo, description: e.target.value });
                }}
              ></textarea>
              <span className="text-lg font-serif font-semibold">
                Category:
              </span>
              <select
                className="mb-4 border border-2 rounded"
                onChange={(e) => {
                  setNewTodo({ ...newTodo, category: e.target.value });
                }}
              >
                {options.map((option) => {
                  return (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  );
                })}
              </select>
              <button
                type="submit"
                onClick={(e) => {
                  handleSubmit(e);
                }}
                className="text-white bg-teal-800 hover:bg-teal-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium w-1/2 mx-28"
              >
                Add New Todo
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-3/5 float-right">
        {" "}
        <Todos todosArray={todosArray} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}
