import React from 'react';
import { Link } from "react-router-dom";
  
const navbar = (props) => {
    
    if(!!window.sessionStorage.getItem('userdetails')){
        const isUserLoggedIn = JSON.parse(window.sessionStorage.getItem('userdetails'));
        if(isUserLoggedIn && isUserLoggedIn.is_project_admin && isUserLoggedIn.is_project_admin === 'N'){
            return (
                <div>
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/mytask">My Task</Link>
                            </li>
                            <li className="nav-item">
                                <a href="/logout/" className="nav-link" onClick={props.logout}>Logout</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            )
        } else  {

            return (
                <div>
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/createuser">Create User</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/createproject">Create Project</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./createtask">Create Task</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./projectassignment">Project Assignment</a>
                            </li>
                            <li className="nav-item">
                                <a href="/logout/" className="nav-link" onClick={props.logout}>Logout</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            )

        } 

    } else {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )


    }



}
export default navbar;