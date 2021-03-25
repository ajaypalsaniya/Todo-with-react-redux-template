import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';

import './../App.css';

const Input = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  function AddTodo() {
    setInput('');
    dispatch(
      addTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
  }
  useEffect(() => {}, [input]);

  return (
    <div style={{ position: 'absolute', top: '3rem' }}>
      <input
        className='textbox'
        placeholder='Add your todos....'
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {input.length < 20 ? (
        <button className='button' onClick={input.length > 3 && AddTodo}>
          add Todo
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default Input;
