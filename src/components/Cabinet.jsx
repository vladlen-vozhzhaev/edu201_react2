import React from "react";
import {host} from "../config";

export class Cabinet extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: ""
        }
    }
    componentDidMount() {
        fetch(host+"/php/getUser.php",{
            credentials: 'include'
        })
            .then(response=>response.json())
            .then(result=>{
                if(result.result !== "error"){
                    this.setState({
                        name: result.name,
                        email: result.email
                    })
                }
            });
    }

    render() {
        return (
            <div>
                <h1>Имя: {this.state.name}</h1>
                <h1>E-mail: {this.state.email}</h1>
            </div>
        )
    }
}
