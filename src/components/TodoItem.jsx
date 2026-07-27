import React from "react";
import { Pencil, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { deleteTodo, setEditTodo, toggleTodo, } from "../redux/features/todoSlice";

const TodoItem = ({todo}) => {

  const dispatch = useDispatch()
  return (  
    
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <input
         onChange={()=> dispatch(toggleTodo(todo.id))} 
          checked={todo.completed}
          type="checkbox"
          readOnly
          className="w-5 h-5 accent-blue-600"
        />

        <span className="text-gray-800 font-medium">
          {todo.title}
        </span>
      </div>

      <div className="flex gap-2">
    <button   onClick={() => dispatch(setEditTodo(todo))} className="p-2 rounded-lg bg-yellow-100 hover:bg-yellow-200 transition">
          <Pencil className="w-5 h-5 text-yellow-600" />
        </button>

        <button onClick={()=> dispatch(deleteTodo(todo.id))} className="p-2 rounded-lg bg-red-100 hover:bg-red-200 transition">
          <Trash2 className="w-5 h-5 text-red-600" />
        </button>
      </div>
    </div>

    );
};

export default TodoItem;