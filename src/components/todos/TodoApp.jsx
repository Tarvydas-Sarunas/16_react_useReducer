import { useReducer, useState } from "react"
import Button from "../counter/ui/Button";

const initTodos = [
  {id: 1, title: 'Pull ups', isDone: false,},
  {id: 2, title: 'Read a book', isDone: true,},
  {id: 3, title: 'Bay milk', isDone: true,},
  {id: 4, title: 'Do home Work', isDone: false,},
  {id: 5, title: 'Do home Work', isDone: false,},
]

let countId = 5
function todoReducer(state, action) {
  switch (action.type) {
case 'delete':
  return state.filter((tObj) => tObj.id !== action.payload);
  case 'addNewTodo':
    return [...state, {id: 6, title: action.payload, isDone: false}]
default:
  console.warn('type nerastas');
   return state
  }
}

export default function TodoApp() {

  const [newTodoValue, setNewTodoValue] = useState('')

const [state, dispatch] = useReducer(todoReducer, initTodos)

function handleNewTodo() {
  dispatch({type: 'addNewTodo', payload: newTodoValue})
}

function hundleDelete(idToDel) {
  dispatch({type: 'delete', payload: idToDel})

}
  return (
    <div>
      <h2 className="text-2xl mb-10">TodoApp</h2>

<div className="flex mb-10">
  <input onChange={(event) => setNewTodoValue(event.target.value)} className="border w-full px-3 py-[6px] rounded-md" type="text" placeholder="new todo" value={newTodoValue}/>
  <Button onClick={handleNewTodo} outline>Add</Button>
</div>


      <ul className="flex flex-col gap-3">
        {state.map((tObj) => <li key={tObj.id}>
          <span className="font-semibold text-lg">{tObj.title} </span>
          <span> - is {tObj.isDone ? 'Done' : 'NOT Done'}</span>{' '}   
          <Button onClick={() => hundleDelete(tObj.id)}>Delete</Button> 
          </li>) }
      </ul>
    </div>
  ) 
}
