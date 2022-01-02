import React, { Component } from 'react';
import '../NavBar/NavBar.css';
import { Grid, Avatar } from "@material-ui/core";
import insta_logo from "../../images/logoinsta.png";
import home_icon from "../../images/home.svg";
import message_icon from "../../images/message.svg";
import find_icon from "../../images/find.svg";
import react_icon from "../../images/love.svg";
import profile_pic from "../../images/pp1.png";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className='navbar_barContent'>
                    <Grid container>
                        <Grid item xs={2}></Grid>

                        <Grid item xs={3}>
                            <img className='navbar_instaLogo' src={insta_logo} width="105px" alt='navbar_instaLogo' />
                        </Grid>

                        <Grid item xs={3}>
                            <input className='navbar_search' type="text" placeholder="Search" />
                        </Grid>

                        <Grid item xs={3} style={{ "display": "flex" }}>
                            <img className='navbar_icon' src={home_icon} width="25px" alt='home_icon' />
                            <img className='navbar_icon' src={message_icon} width="25px" alt='message_icon' />
                            <img className='navbar_icon' src={find_icon} width="25px" alt='find_icon' />
                            <img className='navbar_icon' src={react_icon} width="25px" alt='react_icon' />
                            <Avatar className='navbar_icon' src={profile_pic} style={{ "maxWidth": "25px", "maxHeight": "25px" }} alt='profile_pic' />
                        </Grid>

                        <Grid item xs={1}></Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default NavBar;