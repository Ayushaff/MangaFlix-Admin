import React, { useState, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMainStatus } from "../../Store/Slices/menuSlice";
import "./header.scss";

import { SearchModal, LoginModal } from "../Modals";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowRightToBracket,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

import Modal from "../../Features/Modal/Modal";
import Logo from "../../SharedUI/Logo/Logo";
import Logged from "./LoggStatus/Logged";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { setDarkTheme, setDefaultTheme } from "../../Store/Slices/themeSlice";

const Header = memo(() => {
  const [active, setActive] = useState(false);
  const [logModal, setLogModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const theme = useSelector((state) => state.theme);

  const handleModal = () => {
    setActive(true);
    dispatch(setMainStatus(false));
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "5px";
  };

  const handleAuthorized = (type) => {
    navigate(`/${type}`);
    setActive(false);
    document.body.style.overflow = "";
  };

  const handleAnouthorizeModal = () => {
    setLogModal(true);
    dispatch(setMainStatus(false));
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "5px";
  };

  const handleMenu = () => {
    dispatch(setMainStatus(true));
  };

  const handleTheme = () => {
    if (theme.darkmode) {
      dispatch(setDefaultTheme(true));
    } else {
      dispatch(setDarkTheme(true));
    }
  };

  return (
    <>
      <div
        className="header-block header-white"
        style={{
          backgroundColor: theme.colors.titleBar,
          color: theme.darkmode ? "white" : "black",
        }}
      >
        <Logo
          handleMenu={handleMenu}
          ico={{ side: "left", type: "open" }}
          color={theme.darkmode ? "white" : "black"}
        />
        <div className="right-links_wrapp">
          {/* <div className="search-block" onClick={handleModal}>
                    <span className="serach-block-ico">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                    <p>Search</p>
                </div> */}
          <div onClick={handleModal}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div>
            <FontAwesomeIcon
              onClick={handleTheme}
              icon={theme.darkmode ? faSun : faMoon}
              style={{ marginLeft: "20px" }}
            />
          </div>
          {!user.username ? (
            <div className="login-var">
              <button
                className="button1"
                style={{
                  backgroundColor : theme.colors.buttonColor,
                  color : theme.darkmode ? "white" : "black",
                }}
                onClick={() => handleAuthorized("singin")}
              >
                Sign Up
              </button>
            </div>
          ) : (
            <Logged />
          )}
        </div>
        <Modal active={active} setActive={setActive}>
          <SearchModal setActive={setActive} />
        </Modal>

        <Modal
          active={logModal}
          setActive={setLogModal}
          styleModalContent={{ position: "fixed", top: "10%", right: "5%" }}
        >
          <LoginModal setActive={setLogModal} />
        </Modal>
      </div>
      <div style={{
        backgroundColor: theme.colors.headbar,
        color : theme.darkmode ? "white" : "black",
        paddingLeft: "50px",
        paddingRight: "50px",
        paddingTop: "10px",
        paddingBottom: "10px",
        fontSize : "15px"
      }}>
        <Link to="/" style={{color : theme.darkmode ? "white" : "black",}}>HOME</Link>
        <Link
          to="/"
          style={{
            marginLeft: "50px",
            color : theme.darkmode ? "white" : "black",
          }} 
        >
          LIBRARY
        </Link>
        <Link
          to="/"
          style={{
            marginLeft: "50px",
            color : theme.darkmode ? "white" : "black",
          }}
        >
          READING HISTORY
        </Link>
        <Link
          to="/"
          style={{
            marginLeft: "50px",
            color : theme.darkmode ? "white" : "black",
          }}
        >
          RECENTLY ADDED
        </Link>
      </div>
      {/* <div
        className="header-plug"
        style={{ postion: "fixed", top: "0px", height: "1px" }}
      /> */}
    </>
  );
});

export default Header;
