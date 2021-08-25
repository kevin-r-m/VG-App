import React from 'react'

const User = ({updateUser, setUserState, userState}) => {
    return (
        <div>

            <div>
                <p>Name: {userState.name.first} {userState.name.last}</p>
                <p>Username: {userState.username}</p>
                <p>Email: {userState.email}</p>

            </div>

            <div>
                <p>{userState.name.first}'s Reviews</p>
                {/* Inject map statement -- iterate over review list */}
            </div>


        </div>
    )
}

export default User
