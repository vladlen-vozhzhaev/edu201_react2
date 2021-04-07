import React from 'react';
import {Auth} from "./Auth";
import {AddPost} from "./AddPost";

export class Admin extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }

    render() {
        return <AddPost changeH1={this.props.changeH1}/>
    }
}
