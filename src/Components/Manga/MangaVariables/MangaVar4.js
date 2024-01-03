import React, { useRef } from 'react';
import { flags } from '../../../Assets/Svg/Flags';
import Img from '../../../SharedUI/StyledComponents/Img/Img';
import './mangaVariables.scss';

const MangaVar4 = ({ manga, mangaCover,idx }) => {
    const ref = useRef();

    return (
        <div className="mangavar4-main" ref={ref}>
            {idx}
            <div className="manga-img-var4">
                <Img src={"https://comicvine.gamespot.com/a/uploads/scale_large/6/67663/4598258-70.jpg"} alt='' draggable={false} />
                {/* dont need flag */}
                {/* <div className="flag-img-var2">
                    <img src={flags[manga?.attributes?.originalLanguage]} alt="" />
                </div> */}
            </div>
            <div className="manga-de-var4">
                <p>{"Naruto and the Sage of Six Paths"}</p>
            </div>
        </div>   
    );
};

export default MangaVar4;