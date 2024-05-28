import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if(!user) return <div>Please Login</div>

    return <div>Welcome {user.username}! Your password is: <b>{user.password}</b></div>
}

export default Profile
