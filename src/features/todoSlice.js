import { createSlice } from '@reduxjs/toolkit';

//const [todoList,settodoList] = useState([])

const initialState = {
  todoList: ['hello'],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      //this is  like settodoList in normal state

      state.todoList.push(action.payload);
    },
  },
});

export const { saveTodo } = todoSlice.actions;
export default todoSlice.reducer;
