import { memo, useMemo } from "react";
import styles from "./pages-links.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const PageArrowLink = memo(
  ({ title = "", link = "", arrowReDirection = false }) => {
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
                  color: "blue",
                }}
              >
                {title}
              </h3>
            </>
          ) : (
            <>
              <h3
                style={{
                  color: "blue",
                }}
              >
                {title}
              </h3>
              <div
                style={{
                  hoverColor: "blue",
                }}
              >
                View All &nbsp;
                <FontAwesomeIcon icon={faArrowRight} style={{}} />
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
);

export default PageArrowLink;
