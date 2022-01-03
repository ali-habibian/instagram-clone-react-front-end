import React, { Component } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailId: null,
            name: null,
            userName: null,
            password: null
        }
    }

    provideEmail = (event) => { this.state.emailId = event.currentTarget.value; }
    provideName = (event) => { this.state.name = event.currentTarget.value; }
    provideUserName = (event) => { this.state.userName = event.currentTarget.value; }
    providePassword = (event) => { this.state.password = event.currentTarget.value; }

    newSignUp = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.state.emailId, this.state.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                let payload = {
                    "userId": user.uid,
                    "userName": this.state.userName,
                    "name": this.state.name,
                    "profileImage": ""
                }

                const requestOption = {
                    method: "POST",
                    headers: { 'Content-Type': "application/json" },
                    body: JSON.stringify(payload),
                }
                fetch("http://localhost:8080/users", requestOption)
                    .then(response => response.json())
                    .then(data => {
                        localStorage.setItem("user", JSON.stringify(user));
                        window.location.reload();
                    })
                    .catch(errer => {

                    })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    render() {
        return (
            <div>
                <input className="loginpage_text" onChange={this.provideEmail} type="text" placeholder="Email" required />
                <input className="loginpage_text" onChange={this.provideName} type="text" placeholder="Full Name" required />
                <input className="loginpage_text" onChange={this.provideUserName} type="text" placeholder="Username" required />
                <input className="loginpage_text" onChange={this.providePassword} type="password" placeholder="Password" required />
                <button className="loginpage_button" onClick={this.newSignUp}>Sign Up</button>
            </div>
        );
    }
}

export default SignUp;
