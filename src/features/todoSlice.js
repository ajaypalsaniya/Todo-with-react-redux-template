import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoList: [
    {
      item: 'Buy Grocery',
      id: 1,
    },
    {
      item: 'Call to Abc',
      id: 2,
    },
    {
      item: 'Buy Milk',
      id: 3,
    },
    {
      item: 'Evening walk',
      id: 4,
    },
  ],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (id) => action.payload.id !== id.id
      );
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export const selectTodoList = (state) => state.todos.todoList;

export default todoSlice.reducer;
