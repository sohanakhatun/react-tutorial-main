import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const {userid} = useParams();
  return (
    <div className='bg-gray-500 text-white p-10 text-center text-4xl font-medium'>User : {userid} </div>
  )
}

export default User