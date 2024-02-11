import React, { useState } from 'react'

const initState = {
  value: 0,
}

export default function Counter() {
const [state, setState] = useState(initState)

  return (
    <div>Counter</div>
  )
}
