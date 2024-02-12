import { useState } from 'react';
import Button from '../counter/ui/Button';

export default function AddTodo({ onHandleNewTodo }) {
  const [newTodoValue, setNewTodoValue] = useState('');

  const addTodoHandler = () => {
    onHandleNewTodo(newTodoValue);
    setNewTodoValue('');
  };

  return (
    <div className='flex mb-10'>
      <input
        onChange={(event) => setNewTodoValue(event.target.value)}
        className='border w-full px-3 py-[6px] rounded-md'
        type='text'
        placeholder='new todo'
        value={newTodoValue}
      />
      <Button onClick={addTodoHandler} outline>
        Add
      </Button>
    </div>
  );
}
