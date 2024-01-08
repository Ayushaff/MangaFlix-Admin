import React, { useEffect, useRef, useState } from 'react';
import { flags } from '../../../Assets/Svg/Flags';
import Img from '../../../SharedUI/StyledComponents/Img/Img';
import './mangaVariables.scss';
import { useSelector } from 'react-redux';
import MangaflixApi from '../../../Services/MangaflixApi';
import Spinner from '../../../SharedUI/LoadComponents/Spiner/Spinner';
import { useNavigate } from 'react-router';

const MangaVar2 = ({ manga, mangaCover }) => {
    const ref = useRef();
    const theme = useSelector((state)=>state.theme);
    const [cover,setCover] = useState(0);
    const navigate = useNavigate();

    useEffect(()=>{
        (async ()=>{
            const resp = await MangaflixApi.getCoverById(manga.relationships[2].id);
            console.log(resp);
            setCover(resp);
          })()
    },[]);

    const handleClick = () => {
        navigate(`/manga/${manga.id}`);
    }

    return (
        <div onClick={handleClick} style={{display: "block", borderRadius :"14px"}} ref={ref}>
            <div className="manga-img-var2">
                {cover === 0 ? <Spinner customStyle={{ width: "50px", height: "50px" }} /> :
                <Img src={`https://uploads.mangadex.org/covers/${manga.id}/${cover.attributes.fileName}`} alt='' draggable={false} />}
                {/* dont need flag */}
                {/* <div className="flag-img-var2">
                    <img src={flags[manga?.attributes?.originalLanguage]} alt="" />
                </div> */}
            </div>
            <div className="manga-de-var2">
                <p style={{color : theme.darkmode ? "white" : "black", overflow : "hidden",whiteSpace : "nowrap",textOverflow : "ellipsis"}}>{manga.attributes.title.en}</p>
            </div>
        </div>   
    );
};

export default MangaVar2;