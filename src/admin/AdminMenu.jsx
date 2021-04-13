import React from "react";
import {NavLink} from "react-router-dom";

export class AdminMenu extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <nav className="nav">
                    <NavLink className="nav-link mx-auto" to="/admin/addCategory">Добавить категорию</NavLink>
                    <NavLink className="nav-link mx-auto" to="/admin/addPost">Добавить статью</NavLink>
                </nav>
            </div>
        )
    }
}
