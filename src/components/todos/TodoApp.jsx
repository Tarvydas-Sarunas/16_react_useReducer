import { useReducer, useState } from 'react';
import Button from '../counter/ui/Button';
import OneTodo from './OneTodo';

const initTodos = [
  { id: 1, title: 'Pull ups', isDone: false },
  { id: 2, title: 'Read a book', isDone: true },
  { id: 3, title: 'Bay milk', isDone: true },
  { id: 4, title: 'Do home Work', isDone: false },
  { id: 5, title: 'Do home Work', isDone: false },
];

let countId = 6;

const ACT = {
  del: 'DEL',
  add: 'ADD',
  toggle: 'TOGGLE',
};

function todoReducer(state, action) {
  switch (action.type) {
    case ACT.del:
      return state.filter((tObj) => tObj.id !== action.payload);
    case ACT.add:
      return [
        ...state,
        { id: countId++, title: action.payload, isDone: false },
      ];
    case ACT.toggle:
      return state.map((tObj) => {
        if (tObj.id === action.payload) {
          return { ...tObj, isDone: !tObj.isDone };
        } else {
          return tObj;
        }
      });

    default:
      console.warn('type nerastas');
      return state;
  }
}

export default function TodoApp() {
  const [newTodoValue, setNewTodoValue] = useState('');

  const [state, dispatch] = useReducer(todoReducer, initTodos);

  const handleNewTodo = (newTodoValue) => {
    dispatch({ type: ACT.add, payload: newTodoValue });
    setNewTodoValue('');
  };

  const hundleDelete = (idToDelete) =>
    dispatch({ type: ACT.del, payload: idToDelete });

  const makeDone = (idToComp) =>
    dispatch({ type: ACT.toggle, payload: idToComp });

  return (
    <div>
      <h2 className='text-2xl mb-10'>TodoApp</h2>

      <div className='flex mb-10'>
        <input
          onChange={(event) => setNewTodoValue(event.target.value)}
          className='border w-full px-3 py-[6px] rounded-md'
          type='text'
          placeholder='new todo'
          value={newTodoValue}
        />
        <Button onClick={handleNewTodo} outline>
          Add
        </Button>
      </div>
      <ul className='flex flex-col gap-3'>
        {state.map((tObj) => (
          <OneTodo
            key={tObj.id}
            tObj={tObj}
            onHundleDelete={hundleDelete}
            onMakeDone={makeDone}
          />
        ))}
      </ul>
    </div>
  );
}
