import { memo, useMemo } from "react";
import styles from "./pages-links.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PageArrowLink = memo(
  ({ title = "", link = "", arrowReDirection = false }) => {
    const theme = useSelector((state) => state.theme);
    const navigate = useNavigate();
    const linkClass = useMemo(
      () =>
        arrowReDirection ? styles.arrow_link_reverse : styles.arrow_link_block,
      [arrowReDirection]
    );

    const handleNavigate = () => {
      navigate(`/${link}`);
    };

    return (
      <div className={linkClass}>
        <div onClick={handleNavigate}>
          {arrowReDirection ? (
            <>
              <FontAwesomeIcon icon={faArrowRight} />
              <h3
                style={{
                  color: theme.darkmode ? "black" : "white",
                  borderBottom: "2px solid red",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                {title}
              </h3>
            </>
          ) : (
            <>
              <h3
                style={{
                  color: theme.darkmode ? "white" : "black",
                  fontSize: 18,
                  fontFamily: "Poppins",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  wordWrap: "break-word",
                  borderBottom: "2px solid red",
                }}
              >
                {title}
              </h3>

              <div
                style={{
                  color: theme.darkmode ? "white" : "black",
                }}
              >
                <p style={{ color: theme.darkmode ? "white" : "black" }}>
                  View All{" "}
                </p>
                &nbsp;
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: theme.darkmode ? "white" : "black" }}
                />
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
);

export default PageArrowLink;
