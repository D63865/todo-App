import Todoform from "./Todoform";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { collection, getDocs } from "firebase/firestore";
import {db} from "../firebase";

export default function Header() {
  let [todosArray, setTodosArray] = useState([]);

  useEffect( () => {
    let tempArray = JSON.parse(localStorage.getItem("todosArray"));
    setTodosArray(tempArray);

    setTodosArray(JSON.parse(localStorage.getItem("todosArray")));
     
  }, []);


//  async function getTodosFromFirebase(){
//     const todoSnapshot = await getDocs(collection,(db,"todo"));
//     const todoList = todoSnapshot.docs.map((doc) =>{
//       return doc.data()
//     } );
//     console.log(todoList)
//   }

  // Delete function
  function deleteTodo(todoToDelete) {
    if (window.confirm("Are you sure want to delete ")) {
      let newTodos = todosArray.filter((todosObj) => {
        return todosObj.id !== todoToDelete.id;
      });
      setTodosArray(newTodos);
      localStorage.setItem("todosArray", JSON.stringify(newTodos));
    }
  }
  //  add new todo
  function addTodo(newTodo) {
    todosArray.push(newTodo);

    localStorage.setItem("todosArray", JSON.stringify(todosArray));
  }
  return (
    <>
      <div className="bg-teal-600 fixed top-0 left-0 right-0 drop-shadow-md h-16 max-w-full flex  justify-between mx-auto px-16 py-2">
        <div className="  px-3  rounded-md text-sm font-medium ">
          {" "}
          <Link to="/">
            <img
              src="image/logo1.png"
              alt="Logo"
              className="rounded-full h-12 w-12 "
            />
          </Link>
        </div>

        <div className=" flex   py-2">
        <h1 className="text-white text-2xl font-bold mx-72">Todo</h1>
        </div>
      </div>
      <Toaster position="top-left" reverseOrder={false} />
      <Todoform
        todosArray={todosArray}
        deleteTodo={deleteTodo}
        addTodo={addTodo}
      />
    </>
  );
}
