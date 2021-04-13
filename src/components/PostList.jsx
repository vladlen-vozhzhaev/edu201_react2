import React from 'react';
import {Link} from "react-router-dom";

function PreviewPost(props){
    return (
        <div className="post-preview">
            <Link to={`/post/${props.id}`}>
                <h2 className="post-title">
                    {props.title}
                </h2>
                <h4 className="post-subtitle" >
                    {props.text}
                </h4>
            </Link>
            <p className="post-meta">Опубликовал&nbsp;
                <a href="#">{props.author}</a>&nbsp;
                {props.date_added}</p>
        </div>
    )
}

export class PostList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        this.props.changeH1("Главная страница");
        fetch("http://201.vozhzhaev.ru/getPosts")
            .then(response=>response.json())
            .then(result=>{

                this.setState({
                    posts: result.map(post=>{
                        const parser = new DOMParser();
                        const html = parser.parseFromString(post.text,'text/html');
                        return <PreviewPost
                        key={post.id}
                        title={post.title}
                        text={html.body.innerText.slice(0,50)+"..."}
                        author={post.author}
                        date_added={post.date_added}
                        id={post.id}
                    />})
                })
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        {this.state.posts}
                    </div>
                </div>
            </div>
        )
    }
}
