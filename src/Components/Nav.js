import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div class ='navContainer'>
            <Link to='/games' class='navItem'>Home</Link>
            <Link to='/profile/id' class='navItem'>My Profile</Link>
            <Link to='/games' class='navItem'>Add Game</Link>
        </div>
    )
}

export default Nav
