import React, { Component } from 'react';
import '../InfoSection/InfoSection.css';
import { Avatar } from "@material-ui/core";
import profileImage from '../../images/pp1.png';

class InfoSection extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='info_container'>
                <Avatar className='info_profileImage' src={profileImage} />
                <div className='info_content'>
                    <div className='info_userName'>User_name</div>
                    <div className='info_description'>Description</div>
                </div>
            </div>
        );
    }
}

export default InfoSection;