import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, clearEditTodo, updateTodo } from "../redux/features/todoSlice";

const TodoForm = () => {
    const [todo, setTodo] = useState("");

    const editTodo = useSelector( (state) => state.todo.editTodo);

    console.log(editTodo);

    useEffect(()=>{

      if(editTodo){
        setTodo(editTodo.title)
      }

    },[editTodo])
  
  console.log(editTodo);
  
  const dispatch = useDispatch();
  
  const handleTodo = ()=>{

    if(!todo.trim()){
      alert("Please fill the input");
      return;
    }
    if(editTodo){
      dispatch(updateTodo({
          id:editTodo.id,
          title:todo
        })
      )
      dispatch(clearEditTodo())
    }
    else{

      dispatch(addTodo(todo))
    }
    setTodo("")
  }
  return (
    <div className="bg-white rounded-xl shadow-md p-5">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Add New Todo
      </h2>

      <div className="flex flex-col sm:flex-row gap-3">
        <input
        value={todo}
          onChange={(e)=>setTodo(e.target.value)}
          type="text"
          placeholder="Enter your todo..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
        />

        <button onClick={handleTodo} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default TodoForm;