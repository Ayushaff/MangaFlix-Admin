import React, { useRef } from "react";
import { flags } from "../../../Assets/Svg/Flags";
import Img from "../../../SharedUI/StyledComponents/Img/Img";
import "./mangaVariables.scss";
import { useSelector } from "react-redux";

const MangaVar4 = ({ manga, mangaCover, idx }) => {
  const ref = useRef();
  const theme = useSelector((state) => state.theme);

  return (
    <div className="mangavar4-main" ref={ref}>
      <div className="counter">{idx + 1}</div>
      <div className="manga-img-var4">
        <Img
          src={
            "https://comicvine.gamespot.com/a/uploads/scale_large/6/67663/4598258-70.jpg"
          }
          alt=""
          draggable={false}
        />
        {/* dont need flag */}
        {/* <div className="flag-img-var2">
                    <img src={flags[manga?.attributes?.originalLanguage]} alt="" />
                </div> */}
      </div>
      <div className="manga-de-var4">
        <p
          style={{
            color: theme.darkmode ? "white" : "black",
            fontSize: 13.3,
            fontFamily: "Fira Sans",
            fontWeight: "800"
          }}
        >
          {"Naruto and the Sage of Six Paths"}
        </p>
      </div>
    </div>
  );
};

export default MangaVar4;
