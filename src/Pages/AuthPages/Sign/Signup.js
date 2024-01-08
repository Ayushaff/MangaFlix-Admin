import React from "react";
import ReactDOM from "react-dom";
import styles from "../auth.module.scss";
import "./singup.scss";
import logo from "../Login/go.png";
import Form from "../../../SharedUI/Form/Form";
import Input from "../../../SharedUI/Form/Input";
import CheckBox from "../../../SharedUI/Form/CheckBox";
import Buttons from "../../../SharedUI/Form/Buttons";
import { useNavigate } from "react-router-dom";
import MainContainer from "../../../Layouts/MainContainer/MainContainer";
import Modal from "../../../Features/Modal/Modal";
import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

const rootModal = document.getElementById("modal-root");

const Signup = () => {
  const theme = useSelector((state)=>state.theme);
  const [shouldShow, setShouldShow] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [r_email, setR_email] = useState("");
  const [password, setPassword] = useState("");
  const [r_password, setR_password] = useState("");
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setShouldShow(true);

    const timeout = setTimeout(() => setShouldShow(false), 5000);

    return () => clearTimeout(timeout);
  }, []);

  const handleSignup = () => {
    setShouldShow(true);
  };

  const handleSingin = () => {
    navigate(`/singin`);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sign Up</title>
        <meta name="description" content={`MangaDex register`} />
      </Helmet>
      <MainContainer mainClasses={styles.flexcenter} isHeaderBlack>
        <Form
          type={"Create Account"}
          additional={
            "Your username must be unique and will be visible to other users."
          }
        >
          <div className="Rectangle" style={{
          backgroundColor : theme.colors.body,
          color : theme.darkmode ? "white" : "black"
        }}>
            <button className="button-column">
              <img src={logo} alt="Logo" />
              <p >Sign in with Google</p>
            </button>

            <div className="HaveAnAccount">
              <div className="text-column" style={{color : theme.darkmode ? "white" : "black"}}>Create a new Account</div>
              <span style={{color : theme.darkmode ? "white" : "black"}}>Already a member ?</span>
              <button className="signin-button" onClick={handleSingin}>
                Sign in
              </button>
            </div>

            <input type="text" className="username" placeholder="Username" />

            <input
              type="text"
              className="email"
              placeholder="Email"
            />

            <input
              type="password"
              className="password"
              placeholder="Password"
            />

            <button className="create" onClick={handleSignup}>
              <p>Create Account</p>
            </button>
          </div>
        </Form>
      </MainContainer>

      {/* {ReactDOM.createPortal(
        <Modal active={shouldShow} setActive={setShouldShow}>
          <div>
            <h2>MangaDex registration</h2>
            <p style={{ marginTop: 15 }}>
              To create an account, please, visit the original MangaDex site!
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: 5,
              }}
            >
              <a
                style={{ color: "red" }}
                href="https://mangadex.org/account/signup"
              >
                {"Click here :)"}
              </a>
            </div>
          </div>
        </Modal>,
        rootModal
      )} */}
    </>
  );
};

export default Signup;
