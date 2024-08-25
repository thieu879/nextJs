"use client"
import React, { useEffect, useState } from 'react'

export default function page() {
  const [user,setuser] = useState()
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
  },[])
  return (
    <div>
        <title>Danh sách người dùng</title>
    </div>
  )
}
