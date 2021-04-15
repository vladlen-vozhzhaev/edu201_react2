import React from 'react';
import SunEditor from "suneditor-react";
import 'suneditor/dist/css/suneditor.min.css';
import {host} from "../config"; // Import Sun Editor's CSS File

class AddCategoryInput extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            newCategory: ""
        }
        this.handlerInput = this.handlerInput.bind(this);
    }
    handlerInput(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        this.props.parent.setState(
            {
                newCategory: value
            }
        )
        console.log(this.props.parent.state.newCategory);
    }
    render() {
        return <input onChange={this.handlerInput} name='newCategory' value={this.state.newCategory} className="form-control" placeholder="Категория"/>
    }
}

export class AddPost extends React.Component{
    constructor(props) {
        super(props);
        this.sunEditorRef = React.createRef();
        this.state = {
            title: "",
            text: "",
            author: "",
            viewCategory:"",
            category:"",
            newCategory:"",
            addNewCategory: ""
        }
        this.handlerInput = this.handlerInput.bind(this);
        this.handlerSubmit= this.handlerSubmit.bind(this);
    }
    componentDidMount() {
        this.props.changeH1("Добавление статьи");

        fetch(host+"/getCategory")
            .then(response=>response.json())
            .then(result=>{
                this.setState({
                    viewCategory: result.map((item)=><option key={item.id} value={item.id}>{item.name}</option>)
                })
            })
    }
    handlerInput(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
        //Инструкция для отображения input
        if(name==='category' && value==='addNew'){
            this.setState({
                addNewCategory: <AddCategoryInput parent={this}/>
            })
        }
    }
    handlerSubmit(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append("title",this.state.title);
        formData.append("text",this.state.text);
        formData.append("author",this.state.author);
        formData.append('category',this.state.category);
        formData.append('newCategory',this.state.newCategory);
        fetch(host+"/addPost",{
            method: "POST",
            body: formData
        }).then(response=>response.json())
            .then(result=>console.log(result));
    }
    render() {
        return(
            <div className="container">
                <div className="col-sm-9 mx-auto">
                    <form onSubmit={this.handlerSubmit}>
                        <div className="mb-3">
                            <input value={this.state.title} onChange={this.handlerInput} name="title" type="text" placeholder="Заголовок" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <SunEditor
                                ref={this.sunEditorRef}
                                name="text"
                                setOptions = {
                                    {
                                        buttonList:[
                                                ['undo', 'redo', 'font', 'fontSize', 'formatBlock'],
                                                ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'removeFormat'],
                                                ['fontColor', 'hiliteColor', 'outdent', 'indent', 'align', 'horizontalRule', 'list', 'table'],
                                                ['link', 'image', 'video', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print', 'save']
                                        ]
                                    }
                                }

                                onChange={(value)=>{
                                    const name = (this.sunEditorRef.current.props.name);
                                    this.setState({
                                        [name]: value
                                    })
                                }}
                                placeholder="Текст статьи"
                                height="400px"/>
                        </div>
                        <div className="mb-3">
                            <select value={this.state.category} onChange={this.handlerInput} name="category" className="form-control">
                                {this.state.viewCategory}
                                <option value="addNew">+Добавить новую+</option>
                            </select>
                            {this.state.addNewCategory}
                        </div>
                        <div className="mb-3">
                            <input value={this.state.author} onChange={this.handlerInput} name="author" type="text" placeholder="Автор" className="form-control"/>
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
