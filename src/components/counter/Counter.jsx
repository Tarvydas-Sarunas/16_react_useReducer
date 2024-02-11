import React, { useState } from 'react'
import Button from './ui/Button';

const initState = {
  value: 0,
}

export default function Counter() {
const [state, setState] = useState(initState)
console.log('state ===', state);

function goUp() {
  // padidinam state 1
 const newState = {value: state.value + 1}
  setState(newState)
}

function goDown() {
  // pamazinamem state 1
  const newState = {value: state.value - 1}
  setState(newState)
}

function reset() {
  setState(initState)
}

function inputChange(event) {
 const exercice = event.target.value;
  const newState = {...state, exercice: exercice }
  setState(newState)
}

function upByValue(howMuch) {
  const newState = {value: state.value + howMuch}
  setState(newState)
}

  return (
    <div className='inline-block border px-3 py-2 text-center shadow-md mb-5'>
      <h3 className='text-lg mb-4'>Counter</h3>
      <h3 className='text-lg mb-4'>{state.exercice}</h3>
      <p className={state.value < 0 ? 'text-red-500 text-5xl mb-3' : 'text-5xl mb-3'}>{state.value}</p>
      <div className='flex gap-2'>
        <Button onClick={goUp}>Up</Button>
        <Button onClick={goDown}>Down</Button>
        <Button onClick={reset} outline>Reset</Button>
        <Button onClick={() => upByValue(5)} outline>Up by 5</Button>
      </div>
      {/* padaryti po kortele inputa kuri ivedant keistume <h3 className='text-lg mb-4'>Push ups</h3> reiksme */}
      <input onChange={inputChange} type="text" placeholder='salut'/>
      </div>
  )
}
