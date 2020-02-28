import React, { useState, useCallback } from 'react';
import './TodoInsert.scss';
import {MdAdd} from 'react-icons/md';

const TodoInsert = ({onInsert}) => {
  const [value, setValue] = useState('')

  const onChange = useCallback(e => {
    setValue(e.target.value)
    // console.log(e.target.value);
  },[]);

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value]
  )
  return (
    <form className="TodoInsert" onSubmit = {onSubmit}>
      <input 
        placeholder='입력해봐' 
        value={value} 
        onChange={onChange}/>
       <button type='submit'>
        <MdAdd />
      </button> 
    </form>
  );
};

export default TodoInsert;