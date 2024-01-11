import React, { useEffect, useRef, useState } from "react";
import { flags } from "../../../Assets/Svg/Flags";
import Img from "../../../SharedUI/StyledComponents/Img/Img";
import "./mangaVariables.scss";
import Rating from '@mui/material/Rating';
import { useSelector } from "react-redux";
import SuggestItem from "../../../Pages/Suggestion/SuggestItem";
import MangaflixApi from "../../../Services/MangaflixApi";
import Spinner from "../../../SharedUI/LoadComponents/Spiner/Spinner";

const MangaVar3 = ({ manga, mangaCover }) => {
  const ref = useRef();
  const theme = useSelector((state)=>state.theme);
  const [value, setValue] = useState(4.5);
  const [cover,setCover] = useState(0);
    useEffect (()=>{
      (async ()=>{
        const resp = await MangaflixApi.getCoverById(manga.relationships[2].id);
        console.log(resp);
        setCover(resp);
      })()
        //console.log(manga);
    },[]);
  return (
    <div className="manga-var3-main">
      <div style={{ display: "block", borderRadius: "14px" }} ref={ref}>
        <div className="manga-img-var3">
          {cover === 0 ? <Spinner customStyle={{ width: "50px", height: "50px" }} /> :<Img
            src={
              "https://comicvine.gamespot.com/a/uploads/scale_large/6/67663/6073793-08.jpg"
            }
            alt=""
            draggable={false}
          />}
          {/* dont need flag */}
          {/* <div className="flag-img-var2">
                    <img src={flags[manga?.attributes?.originalLanguage]} alt="" />
                </div> */}
        </div>
        <div className="manga-de-var3">
        <p
            style={{
              color: theme.darkmode ? "white" : "black" ,
              fontSize: 15,
              fontFamily: "Poppins",
              fontWeight: 500,
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {manga.attributes.title.en}
          </p>
        </div>
      </div>
      <Rating  name="haf-rating" precision={0.5} size="small" value={value} readOnly />
      <div style={{height:"5px"}}/>
      <div
        className="manga-var3-button"
      >
        <p>Chapter 1</p>
        <p style={{color : "gray",fontSize : "9px"}}>Dec.25, 19</p>
      </div>
      <div style={{height:"5px"}}/>
      <div
        className="manga-var3-button"
      >
        <p>Chapter 120</p>
        <p style={{color : "gray",fontSize : "9px"}}>Jan.4, 24</p>
      </div>
    </div>
  );
};

export default MangaVar3;
