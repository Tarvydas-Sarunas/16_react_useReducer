import React, { useReducer, useState } from 'react'
import Button from './ui/Button';

const initState = {
  value: 0,
}

function counterReducer(state, action ) {

}

export default function CounterBetter() {
// const [state, setState] = useState(initState)

const [state, dispatch] = useReducer(counterReducer, initState)

console.log('state ===', state);

function goUp() {
  // padidinam state 1
 
}

function goDown() {
  // pamazinamem state 1
  
}

function reset() {
 
}

function inputChange(event) {
 const exercice = event.target.value;
  const newState = {...state, exercice: exercice }
  setState(newState)
}

function upByValue(howMuch) {
  
}

  return (
    <div className='inline-block border px-3 py-2 text-center shadow-md mb-5'>

      <h3 className='text-lg mb-4'>Better</h3>
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
