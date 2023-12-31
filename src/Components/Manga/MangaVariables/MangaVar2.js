import React, { useRef } from 'react';
import { flags } from '../../../Assets/Svg/Flags';
import Img from '../../../SharedUI/StyledComponents/Img/Img';
import './mangaVariables.scss';

const MangaVar2 = ({ manga, mangaCover }) => {
    const ref = useRef();

    return (
        <div style={{display: "block", borderRadius :"14px"}} ref={ref}>
            <div className="manga-img-var2">
                <Img src={"https://comicvine.gamespot.com/a/uploads/scale_large/6/67663/7962845-34.jpg"} alt='' draggable={false} />
                {/* dont need flag */}
                {/* <div className="flag-img-var2">
                    <img src={flags[manga?.attributes?.originalLanguage]} alt="" />
                </div> */}
            </div>
            <div className="manga-de-var2">
                <p>{"Attack on titan final chapters part 3"}</p>
            </div>
        </div>   
    );
};

export default MangaVar2;