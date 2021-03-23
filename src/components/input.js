import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Input.css';

import saveTodo from '../features/todoSlice';

const Input = () => {
  const [input, setinput] = useState('');
  const dispatch = useDispatch();
  const addTodo = () => {
    dispatch(
      saveTodo({
        item: input,
      })
    );
  };

  return (
    <div className='input'>
      <input
        type='text'
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default Input;
