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
        let data = [
            {
                "postId": "1234",
                "userName": "ali_habibian",
                "postImageUrl": "https://media-cdn.tripadvisor.com/media/photo-s/13/2d/b2/e2/cholothse-montain-views.jpg",
                "timeStamp": "12345",
                "likes": "68"
            },
            {
                "postId": "1234",
                "userName": "ali_habibian",
                "postImageUrl": "https://media-cdn.tripadvisor.com/media/photo-s/13/2d/b2/e2/cholothse-montain-views.jpg",
                "timeStamp": "12345",
                "likes": "68"
            },
            {
                "postId": "1234",
                "userName": "ali_habibian",
                "postImageUrl": "https://media-cdn.tripadvisor.com/media/photo-s/13/2d/b2/e2/cholothse-montain-views.jpg",
                "timeStamp": "12345",
                "likes": "68"
            }
        ];
        this.setState({ postArray: data });
    }

    render() {
        return (
            <div>
                {
                    this.state.postArray.map((item, index) => (
                        <Post id={item.postId} userName={item.userName} postIamge={item.postImageUrl} likes={item.likes} />
                    ))
                }
            </div>
        );
    }
}

export default MainPage;