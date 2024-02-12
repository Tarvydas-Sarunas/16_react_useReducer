import Button from '../counter/ui/Button';

export default function OneTodo({
  tObj,
  onHundleDelete,
  onMakeDone,
  onHandleUpdate,
}) {
  return (
    <li className='grid grid-cols-5 gap-3'>
      <span
        className={
          'font-semibold text-lg ' +
          `${tObj.isDone ? 'line-through text-gray-400' : ''} `
        }
      >
        {tObj.title}{' '}
      </span>
      <span> - is {tObj.isDone ? 'Done' : 'NOT Done'}</span>{' '}
      <Button onClick={() => onHundleDelete(tObj.id)}>Delete</Button>
      <Button onClick={() => onMakeDone(tObj.id)} outline>
        {tObj.isDone ? 'Undo' : 'Complete'}
      </Button>
      <Button onClick={() => onHandleUpdate(tObj.id)}>Edit</Button>
    </li>
  );
}
