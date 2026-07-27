import React from 'react'
import TodoForm from './components/TodoForm';
import TodoStats from './components/TodoStats';
import TodoList from './components/TodoList';

const App = () => {  

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-6">

        <h1 className="text-4xl font-bold text-center text-gray-800">
          Redux Toolkit Todo App
        </h1>
        <TodoForm  />

        <TodoStats />

        <TodoList />

      </div>
    </div>
    // <div>
    //   <button onClick={()=> dispatch(addTodo)}></button>
    // </div>
  )
}

export default App