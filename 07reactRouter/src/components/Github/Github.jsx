import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom' 


function Github() {
    const data = useLoaderData() // This is the more optimized approach to use the API's.
    // const [followers, setFollowers] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/mesumbinshaukat')
    //         .then(res => res.json())
    //         .then(data => {
    //             setFollowers(data)
    //         })
    // }, [])
  return (
    <div className='text-center bg-yellow-300 m-6'>
      <h1 className='text-5xl font-bold'>Github</h1>
      <h3 className='text-3xl'>Followers: {data.followers}</h3>
      <div className='m-6 flex justify-center pb-5'>
        <img src={data.avatar_url} alt={data.name} className='w-[200px] h-[200px] rounded-full' />
      </div>
    </div>
  )
}

export default Github

export const githubLoader = async () => {
    const res = await fetch('https://api.github.com/users/mesumbinshaukat')
    const data = await res.json()
    return data
}