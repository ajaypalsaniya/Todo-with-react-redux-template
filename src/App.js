import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Input from './features/Input';
import { selectTodoList } from './features/todoSlice';
import { removeTodo } from './features/todoSlice';

function App() {
  const dispatch = useDispatch();
  const todoList = useSelector(selectTodoList);

  return (
    <div className='App'>
      <header className='App-header'>
        <Input />
        <div className='todocontainer'>
          {todoList.length > 0 ? (
            todoList.map((todo) => (
              <li key={todo.id} className='listItem'>
                {todo.item}
                <button
                  style={{ marginLeft: '1rem' }}
                  className='button'
                  onClick={() => dispatch(removeTodo({ id: todo.id }))}
                >
                  Delete
                </button>
                {console.log(todo.id)}
              </li>
            ))
          ) : (
            <div>Add your todos now...</div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
