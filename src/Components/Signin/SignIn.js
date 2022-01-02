import React, { Component } from 'react'
import "../LoginPage/LoginPage.css";
import { app } from '../firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailId: null,
            password: null
        };
    }

    provideEmail = (event) => { this.state.emailId = event.currentTarget.value; }
    providePassword = (event) => { this.state.password = event.currentTarget.value; }

    newSignIn = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.state.emailId, this.state.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                localStorage.setItem("user", user);
                window.location.reload();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    render() {
        return (
            <div>
                <input className="loginpage_text" onChange={this.provideEmail} type="text" placeholder="Phone number, username, or email" />
                <input className="loginpage_text" onChange={this.providePassword} type="password" placeholder="Password" />
                <button className="loginpage_button" onClick={this.newSignIn}>Log In</button>
            </div>
        );
    }
}

export default SignIn;