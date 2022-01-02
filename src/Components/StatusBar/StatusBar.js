import React, { Component } from 'react';
import '../StatusBar/StatusBar.css';
import { Avatar } from "@material-ui/core";
import upload_icon from "../../images/statusadd.png";




class StatusBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            statusList: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        let data = [
            {
                "username": "ali_habibian",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username": "Test",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username": "ali_habibian",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username": "Test_user",
                "imageURL": "../../images/pp1.png"
            }
        ];
        this.setState({ statusList: data });
    }

    render() {
        return (
            <div>
                <div className='statusBar_container'>
                    <img className='statusBar_uploadIcon' src={upload_icon} alt='upload_icon' width="55px" height="55px"/>
                    {
                        this.state.statusList.map((item, index) => (
                            <div className='statusBar_status'>
                                <Avatar className='statusBar_statusImg' src={item.imageURL} alt='status_iamge' />
                                <div className="statusBar_text">{item.username}</div>
                            </div>
                        ))
                    }

                </div>
            </div>
        );
    }
}

export default StatusBar;