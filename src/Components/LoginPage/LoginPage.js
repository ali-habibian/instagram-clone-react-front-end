import React, { Component } from "react";
import "../LoginPage/LoginPage.css";
import { Grid } from "@material-ui/core";
import inst_image from "../../images/9364675fb26a.svg";
import insta_logo from "../../images/logoinsta.png";
import fb_icon from "../../images/fb.png";
import appstore_icon from "../../images/app.png";
import googlestore_icon from "../../images/play.png";
import SignIn from "../Signin/SignIn";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={3}>

          </Grid>
          <Grid item xs={6}>
            <div className="loginpage_main">
              <div>
                <img src={inst_image} width="454px" alt="img" />
              </div>
              <div>
                <div className="loginpage_rightcomponent">
                  <img
                    className="loginpage_logo"
                    src={insta_logo}
                    alt="insta logo"
                  />
                  <div className="loginpage_signin">
                    <SignIn/>

                    <div className="loginpage_ordiv">
                      <div className="loginpage_divder"></div>
                      <div className="loginpage_or">OR</div>
                      <div className="loginpage_divder"></div>
                    </div>

                    <div className="loginpage_facebook"><img src={fb_icon} width="15px" alt="fb_icon" style={{ "marginRight": "5px" }} /> Log in with Facebook</div>
                    <div className="loginpage_forgot">Forgot password?</div>
                  </div>
                </div>

                <div className="loginpage_singupoption">
                  <div className="loginpage_singup">
                    Don't have an account? <span style={{"fontWeight":"bold", "color":"#0395F6"}}>sign up</span>
                  </div>
                  <div className="loginpage_singin">
                    have an account? <span style={{"fontWeight":"bold", "color":"#0395F6"}}>sign in</span>
                  </div>
                </div>

                <div className="loginpage_downloadsection">
                  <div className="loginpage_downloadsection_text">Get the app.</div>
                  <div className="loginpage_downloadsection_option">
                    <img className="loginpage_downloadsection_img" src={appstore_icon} width="136px" alt="appstore_icon"/>
                    <img  className="loginpage_downloadsection_img" src={googlestore_icon} width="136px" alt="googlestore_icon"/>
                  </div>
                </div>

              </div>
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;
