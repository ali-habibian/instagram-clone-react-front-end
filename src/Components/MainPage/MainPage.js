import React, { Component } from 'react';
import '../MainPage/MainPage.css';
import Post from '../Post/Post';


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postArray: []
        }
    }

    componentDidMount() {
        this.getPost();
    }

    getPost = () => {
        const thisContext = this;
        
        const requestOption = {
            method: "GET",
            headers: { 'Content-Type': "application/json" }
        }

        fetch("http://localhost:8080/posts", requestOption)
            .then(response => response.json())
            .then(data => {
                thisContext.setState({ postArray: data });
            })
            .catch(errer => {

            });
        
    }

    render() {
        return (
            <div>
                {
                    this.state.postArray.map((item, index) => (
                        <Post id={item.postId} userName={item.userName} postIamge={item.postPath} likes={item.likeCount} />
                    ))
                }
            </div>
        );
    }
}

export default MainPage;