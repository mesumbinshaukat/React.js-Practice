import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {username} = useParams()
  return (
    <>
      <h2 className='text-4xl bg-zinc-600 text-center text-white p-3'>Username: {username}</h2>
    </>
  )
}

export default User
