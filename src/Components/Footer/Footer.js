import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <div
      className="footer-main"
      style={{
        backgroundColor: theme.colors.headbar,
        color: theme.darkmode ? "white" : "black",
      }}
    >
      <div className="footer-1">
        <Link
          className="footer-1-elem"
          style={{
            color: theme.darkmode ? "white" : "black",
            fontSize: 13,
            fontFamily: "Montserrat",
            fontWeight: 700,
          }}
          to="/"
        >
          Privacy Policy
        </Link>

        <Link
          className="footer-1-elem"
          style={{
            color: theme.darkmode ? "white" : "black",
            fontSize: 13,
            fontFamily: "Montserrat",
            fontWeight: 700,
          }}
          to="/"
        >
          About Us
        </Link>

        <Link
          className="footer-1-elem"
          style={{
            color: theme.darkmode ? "white" : "black",
            fontSize: 13,
            fontFamily: "Montserrat",
            fontWeight: 700,
          }}
          to="/"
        >
          Contact Us
        </Link>

        <Link
          className="footer-1-elem"
          style={{
            color: theme.darkmode ? "white" : "black",
            fontSize: 13,
            fontFamily: "Montserrat",
            fontWeight: 700,
          }}
          to="/"
        >
          Terms of Service
        </Link>

      </div>
      <div
        className="footer-2"
        style={{
          backgroundColor: theme.colors.titleBar,
          color: theme.darkmode ? "white" : "black",
          fontSize: 13,
            fontFamily: "Montserrat",
            fontWeight: 700,
        }}
      >
        MANGAFLIX
      </div>
    </div>
  );
};

export default Footer;
