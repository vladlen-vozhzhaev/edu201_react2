import React from 'react';
import {Auth} from "./Auth";
import {AddPost} from "./AddPost";
import {AdminMenu} from "./AdminMenu";
import {Route,Switch} from "react-router-dom";
import {AddCategory} from "./AddCategory";
export class Admin extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            page: ""
        }
    }
    componentDidMount() {
    }

    render() {
        return <div>
            <AdminMenu/>
            <div className="py-5">
                <Switch>
                    <Route path="/admin/addPost">
                        <AddPost changeH1={this.props.changeH1}/>
                    </Route>
                    <Route path="/admin/addCategory">
                        <AddCategory/>
                    </Route>
                </Switch>
            </div>
        </div>
    }
}
