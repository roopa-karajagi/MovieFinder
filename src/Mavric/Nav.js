import React from "react"
import './Movie.css'
import { NavLink ,withRouter} from "react-router-dom"

 const Nav = () => {
    return (
            <div>
                <ul className="nav nav-tabs bg-secondary">
                    <li className="nav-item">
                        <NavLink activeStyle={{borderBottom:"2px solid #fff"}} className="nav-link " to="/MovieList">Movies</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink  className="nav-link" to="/MovieDetails/:id">About</NavLink>
                    </li>
                </ul>
            </div>
        
    )
}

export default withRouter(Nav);

