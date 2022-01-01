import React, { Component } from 'react';
import '../Post/Post.css';
import { Avatar } from '@material-ui/core';
import love_icon from '../../images/love.svg'
import comment_icon from '../../images/comment.svg'
import share_icon from '../../images/share.svg'

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentList: []
        }
    }

    componentDidMount() {
        this.getComments();
    }

    getComments = () => {
        let data = [
            {
                "userName": "addgg",
                "commentId": "1234",
                "timeStamp": "123554",
                "descripton": "Comment 1"
            },
            {
                "userName": "afhhj",
                "commentId": "1234",
                "timeStamp": "123554",
                "descripton": "Comment 2"
            },
            {
                "userName": "fgdfg",
                "commentId": "1234",
                "timeStamp": "123554",
                "descripton": "Comment 3"
            }
        ];

        this.setState({ commentList: data });
    }

    render() {
        return (
            <div>
                <div className='post_container'>
                    {/* Header */}
                    <div className='post_header'>
                        <Avatar className='post_profileImg' src={this.props.profileImage} alt='post_profileImg' />
                        <div className='post_username'>{this.props.userName}</div>
                    </div>

                    {/* Image */}
                    <div>
                        <img src={this.props.postIamge} alt='post_iamge' width="100%" />
                    </div>

                    {/* Analytics */}
                    <div>
                        <div style={{ "marginLeft": "10px" }}>
                            <img className='post_analyticts_icon' src={love_icon} alt='love_icon' width="615px" />
                            <img className='post_analyticts_icon' src={comment_icon} alt='comment_icon' width="615px" />
                            <img className='post_analyticts_icon' src={share_icon} alt='share_icon' width="615px" />
                        </div>

                        <div style={{ "fontWeight": "bold", "marginLeft": "20px" }}>
                            {this.props.likes} likes
                        </div>
                    </div>

                    {/* Comment Section */}
                    <div>
                        {
                            this.state.commentList.map((item, index) => (
                                <div className='post_comment'>{item.userName}: {item.descripton}</div>
                            ))
                        }

                        <input className='post_commentBox' type="text" placeholder='Add a comment...' />
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;