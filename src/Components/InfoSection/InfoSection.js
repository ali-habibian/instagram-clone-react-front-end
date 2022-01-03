import React, { Component } from 'react';
import '../InfoSection/InfoSection.css';
import { Avatar } from "@material-ui/core";
import profileImage from '../../images/pp1.png';
import upload_icon from '../../images/upload.png';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storeage } from '../firebase';

class InfoSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progressBar: ""
        }
    }

    upload = (event) => {
        let image = event.target.files[0];

        const thisConext = this;

        if (image == null || image == null)
            return;
        // Create a reference to starage
        const storageRef = ref(storeage, 'images/' + image.name);

        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                thisConext.setState({ progressBar: progress })
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                thisConext.setState({ progressBar: "Uploaded" });
                // Handle successful uploads on complete
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log(downloadURL);
                    let payload = {
                        "postId": Math.floor(Math.random() * 100000).toString(),
                        "userId": JSON.parse(localStorage.getItem("user")).uid,
                        "postPath": downloadURL,
                        "timeStamp": new Date().getTime(),
                        "likeCount": 0
                    }

                    const requestOption = {
                        method: "POST",
                        headers: { 'Content-Type': "application/json" },
                        body: JSON.stringify(payload),
                    }
                    fetch("http://localhost:8080/posts", requestOption)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            window.location.reload();
                        })
                        .catch(errer => {

                        })
                });
            }
        );
    }

    render() {
        return (
            <div className='info_container'>
                <Avatar className='info_profileImage' src={profileImage} />
                <div className='info_content'>
                    <div className='info_userName'>User_name</div>
                    <div className='info_description'>Description</div>
                </div>
                <div className='info_fileUpload' >
                    <label for="file_upload">
                        <img className='mainPage_uploadIcon' src={upload_icon} alt='upload_icon' style={{ "cursor": "pointer" }} />
                    </label>
                    <input id="file_upload" type="file" onChange={this.upload} />
                    <div className='file_uploadText'>{this.state.progressBar}</div>
                </div>
            </div>
        );
    }
}

export default InfoSection;