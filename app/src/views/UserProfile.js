import React from 'react'
import { useAuth } from '../contexts/Auth'

function UserProfile() {
    const { currentUser } = useAuth()

    return (
        <div class="content">
            { currentUser.email }
        </div>
    )
}

export default UserProfile
