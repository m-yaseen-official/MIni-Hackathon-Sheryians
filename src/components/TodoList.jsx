import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";




const TodoList = () => {
  const todos = useSelector((state)=> state.todo.todos)

  return (
    <div className="space-y-4">

      {
        todos.map((todo)=>{
          return(
            <TodoItem key={todo.id} todo={todo} />
          )
        })
      }

    </div>
  );
};

export default TodoList;