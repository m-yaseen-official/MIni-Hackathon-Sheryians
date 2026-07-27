import React from "react";
import { useSelector } from "react-redux";

const TodoStats = () => {

  const todos = useSelector((state) => state.todo.todos);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-white shadow rounded-xl p-5 text-center">
        <h3 className="text-gray-500 text-sm">Total</h3>
        <p className="text-3xl font-bold text-blue-600">
          {todos.length}
        </p>
      </div>

      <div className="bg-white shadow rounded-xl p-5 text-center">
        <h3 className="text-gray-500 text-sm">Completed</h3>
        <p className="text-3xl font-bold text-green-600">
          {
            todos.filter((todo) => todo.completed).length
          }
        </p>
      </div>

      <div className="bg-white shadow rounded-xl p-5 text-center">
        <h3 className="text-gray-500 text-sm">Pending</h3>
        <p className="text-3xl font-bold text-red-500">
          {
            todos.filter((todo) => !todo.completed).length
          }
        </p>
      </div>
    </div>
  );
};

export default TodoStats;