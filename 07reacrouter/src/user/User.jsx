import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
    return (
        <div className='text-center bg-slate-700 text-white max-w-screen-md mx-auto p-4'>
            User: {userId}
        </div>
    )
}

export default User
