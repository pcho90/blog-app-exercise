import React from 'react'
import './Header.Style.css'

import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (
        <nav>
            <div className="nav">
                <NavLink className="logo" to="/">PWOKE.Blog</NavLink>
                <div className="links">
                    <NavLink className="link" to="/create">Posts</NavLink>
                    <NavLink className="link" to="/add-post">Add Post</NavLink>
                </div>
            </div>
        </nav>
    )

}

export default Nav