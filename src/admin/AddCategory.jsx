import React from "react";
import {host} from "../config";

export class AddCategory extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            category: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(e){
        const name = e.target.name;
        const value =e.target.value;
        this.setState({
            [name]: value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('category',this.state.category);
        fetch(host+'/addCategory',{
            method: "POST",
            body: formData
        })
            .then(response=>response.json())
            .then(result=>{
                if(result.result === "success"){
                    alert("Категория добавлена");
                }
            })
    }
    render() {
        return (
            <div className="container">
                <div className="col-sm-6 mx-auto">
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <input value={this.state.category} onChange={this.handleInputChange} name="category" type="text" className="form-control" placeholder="Добавить категорию"/>
                        </div>
                        <div className="mb-3 text-center">
                            <input type="submit" className="btn btn-primary"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
