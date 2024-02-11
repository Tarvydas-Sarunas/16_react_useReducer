
import Button from '../counter/ui/Button'

export default function OneTodo({tObj, onHundleDelete, onMakeDone }) {
  return (
    <li key={tObj.id}>
          <span className={"font-semibold text-lg " + `${tObj.isDone ? 'line-through text-gray-400' : ''} `}>{tObj.title} </span>
          <span> - is {tObj.isDone ? 'Done' : 'NOT Done'}</span>{' '}   
          <Button onClick={() => onHundleDelete(tObj.id)}>Delete</Button> 
          <Button onClick={() => onMakeDone(tObj.id)} outline >{tObj.isDone ? 'Undo' : 'Complete'}</Button> 
          </li>
  )
}
