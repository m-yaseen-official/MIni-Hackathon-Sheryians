import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  todos:[],
  editTodo: null
}
 

;

export const todoSlice = createSlice({
  name:"todo",
  initialState,
  reducers: {
  addTodo: (state, action) => {
    const newTodo = {
      id: Date.now(),
      title: action.payload,
      completed: false,
    };

    state.todos.push(newTodo);
  },

  updateTodo: (state, action) => {
    const todo = state.todos.find(
      (todo) => todo.id === action.payload.id
    );

    if (todo) {
      todo.title = action.payload.title;
    }
  },

  deleteTodo: (state, action) => {
    state.todos = state.todos.filter(
      (todo) => todo.id !== action.payload
    );
  },

  toggleTodo: (state, action) => {
    const todo = state.todos.find(
      (todo) => todo.id === action.payload
    );

    if (todo) {
      todo.completed = !todo.completed;
    }
  },

  setEditTodo: (state, action) => {
    state.editTodo = action.payload;
  },

  clearEditTodo: (state) => {
    state.editTodo = null;
  },
}

})


export const {addTodo,updateTodo,deleteTodo, setEditTodo, clearEditTodo, toggleTodo} = todoSlice.actions
export default todoSlice.reducer