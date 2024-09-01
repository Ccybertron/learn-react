import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data , setData]= useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Ccybertron')
    //     .then(Response => Response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
            
    //     })
    // },[])
    return (
        <div className='text-center m-3 mx-auto  max-w-screen-md bg-gray-600 text-white  p-4 text-3xl'>
            Github: Followers {data.followers}
            <img src={data.avatar_url} alt="git pic" width={200} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
  const response =  await fetch('https://api.github.com/users/Ccybertron')
  return response
}
