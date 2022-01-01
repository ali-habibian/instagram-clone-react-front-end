import React, { Component } from 'react';
import '../Suggestions/Suggestions.css';
import { Avatar } from "@material-ui/core";
import avatarImage from '../../images/pp1.png';

class Suggestions extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className='suggestions_container'>
                    <div className='suggestions_header'>
                        <div>Suggestion For You</div>
                    </div>
                    <div className='suggestions_body'>
                        <div className='suggestions_friends'>
                            <Avatar className='suggestions_prfileImage' src={avatarImage} alt='avatarImage' />
                            <div className='suggestions_userName'>Friend 1</div>
                        </div>

                        <div className='suggestions_friends'>
                            <Avatar className='suggestions_prfileImage' src={avatarImage} alt='avatarImage' />
                            <div className='suggestions_userName'>Friend 2</div>
                        </div>

                        <div className='suggestions_friends'>
                            <Avatar className='suggestions_prfileImage' src={avatarImage} alt='avatarImage' />
                            <div className='suggestions_userName'>Friend 3</div>
                        </div>

                        <div className='suggestions_friends'>
                            <Avatar className='suggestions_prfileImage' src={avatarImage} alt='avatarImage' />
                            <div className='suggestions_userName'>Friend 4</div>
                        </div>

                        <div className='suggestions_friends'>
                            <Avatar className='suggestions_prfileImage' src={avatarImage} alt='avatarImage' />
                            <div className='suggestions_userName'>Friend 5</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Suggestions;
<div>
    Suggestions
</div>