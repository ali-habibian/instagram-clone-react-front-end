import React, { Component } from "react";
import "../LoginPage/LoginPage.css";
import { Grid } from "@material-ui/core";
import inst_image from "../../images/9364675fb26a.svg";
import insta_logo from "../../images/logoinsta.png";
import fb_icon from "../../images/fb.png";
import appstore_icon from "../../images/app.png";
import googlestore_icon from "../../images/play.png";
import SignIn from "../Signin/SignIn";
import SignUp from "../SignUp/SignUp";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true
    }
  }

  changLogin = () => {
    if (this.state.isLogin)
      this.setState({ isLogin: false });
    else
      this.setState({ isLogin: true });
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

                    {
                      this.state.isLogin ? <SignIn /> : <SignUp />
                    }


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
                  {
                    this.state.isLogin ?
                      <div>
                        Don't have an account? <span onClick={this.changLogin} style={{ "fontWeight": "bold", "color": "#0395F6", "cursor": "pointer" }}>sign up</span>
                      </div>
                      :
                      <div>
                        have an account? <span onClick={this.changLogin} style={{ "fontWeight": "bold", "color": "#0395F6", "cursor": "pointer" }}>sign in</span>
                      </div>
                  }
                </div>

                <div className="loginpage_downloadsection">
                  <div>Get the app.</div>
                  <div className="loginpage_downloadsection_option">
                    <img className="loginpage_downloadsection_img" src={appstore_icon} width="136px" alt="appstore_icon" />
                    <img className="loginpage_downloadsection_img" src={googlestore_icon} width="136px" alt="googlestore_icon" />
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
