import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "../auth.module.scss";
import logo from "./go.png";
import MainContainer from "../../../Layouts/MainContainer/MainContainer";
import { setUser } from "../../../Store/Slices/userSlice";
import MangaDexApi from "../../../Services/MangaDexApi";
import { Helmet } from "react-helmet";
import "./signin.scss";

const modalRoot = document.getElementById("modal-root");

const Signin = () => {
  const theme = useSelector((state)=>state.theme);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [shouldOpen, setShouldOpen] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState(true);

  const handleSingup = () => {
    navigate(`/singup`);
  };

  const handleSubmit = () => {
    if (!username || !password || checkbox === false) return false;

    const creds = {
      username: username,
      password: password,
    };

    setLoading(true);

    (async () => {
      const resp = await fetch(
        `${MangaDexApi.CorsProxy}https://api.mangadex.org/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(creds),
        }
      ).then((data) => data.json());

      if (resp.result === "ok") {
        const expires = new Date().valueOf() + 15 * 60000;

        const user = {
          username,
          expires,
          sessionToken: resp.token.session,
          refreshToken: resp.token.refresh,
        };

        localStorage.setItem("user", JSON.stringify(user));

        dispatch(setUser(user));
        navigate(`/`);
      } else {
        const message = {
          code: resp.errors[0].status,
          details: resp.errors[0].detail,
        };

        setError(message);
        setShouldOpen(true);

        setTimeout(() => {
          setShouldOpen(false);
        }, 4000);
      }

      setLoading(false);
    })();
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sign In</title>
        <meta name="description" content={`MangaDex login`} />
      </Helmet>
      <MainContainer mainClasses={styles.flexcenter} isHeaderBlack>
        <div className="Rectangle" style={{
          backgroundColor : theme.colors.body,
          color : theme.darkmode ? "white" : "black"
        }}>
          <button className="button-column">
            <img src={logo} alt="Logo" />
            <p >Sign in with Google</p>
          </button>

          <div style={{color : theme.darkmode ? "white" : "black"}} className="DonTHaveAnAccountCreateOne">
          <div style={{color : theme.darkmode ? "white" : "black"}} className="text-column">Welcome back,</div>
            <span >Don’t have an account?</span>
            <button className="create-button" onClick={handleSingup}>Create one</button>
          </div>

          <input   type="text" className="input-field1" placeholder="Email" />

          <input
            type="password"
            className="input-field2"
            placeholder="Password"
            
          />

          <button className="submit">
            <p>Submit</p>
          </button>
        </div>
      </MainContainer>

      {/* {error
				? ReactDOM.createPortal(
						<Modal active={shouldOpen} setActive={setShouldOpen}>
							<ErrorModal error={error} setActive={setShouldOpen} />
						</Modal>,
						modalRoot
				  )
				: null} */}

      {/* {message
				? ReactDOM.createPortal(
						<Modal active={message} setActive={setMessage}>
							<div style={{ padding: 15, fontSize: '14pt' }}>
								<h1 style={{ marginBottom: 10 }}>Test loggin data:</h1>
								<p>Login: usertest123</p>
								<p>Password: usertest123</p>
							</div>
						</Modal>,
						modalRoot
				  )
				: null} */}
    </>
  );
};

export default Signin;
