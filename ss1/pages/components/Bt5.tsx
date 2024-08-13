import React, { useState } from 'react'

export default function Bt5() {
    const [number,setNumber] = useState(0)
  const handleClick = ()=>{
    setNumber(number+1)
  }
  return (
      <div>
          <div>{number}</div>
        <button onClick={handleClick}>tăng</button>
    </div>
  )
}
