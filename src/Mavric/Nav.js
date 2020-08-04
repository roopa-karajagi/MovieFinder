import React from "react"
import './Movie.css'
import {withRouter, Link} from "react-router-dom"

const isActive=(history,path)=>{
    // debugger
    if(history.location.pathname===path){
        return { color:'#FF9900'
        }
    }
    else{
        return { color:'#ffffff'
        }
    }
}

 const Nav = ({history}) => {
    return (
            <div>
                <ul className="nav nav-tabs bg-secondary">
                    <li className="nav-item">
                        <Link style={isActive(history,'/MovieList')} className="nav-link " to="/MovieList">Movies</Link>
                    </li>
                    <li className="nav-item">
                        <Link  style={isActive(history,'/MovieDetails/:id')}className="nav-link " to="/MovieDetails/:id">Movie Details</Link>
                    </li>
                </ul>
            </div>
        
    )
}

export default withRouter(Nav);

