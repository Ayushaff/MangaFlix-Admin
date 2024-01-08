import { useDispatch, useSelector } from "react-redux";
import {
    fetchLatestUpdates,
    fetchRecentlyAdded,
    fetchSeasonal,
  } from "../../Store/Slices/suggestSlice";
import { useEffect, useState } from "react";
import MangaVar4 from "../Manga/MangaVariables/MangaVar4";
import './popularTab.scss';

const PopularTab = () =>{
    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();
    const seasonal = useSelector((state) => state.suggest.seasonal);
    const [mangaListCovers, setMangaListCovers] = useState({});
    useEffect(() => {
        dispatch(fetchSeasonal());
        
      }, []);
    

    return (
       <>
        <div className="popular-tab" >
            {
                seasonal.data?.map((item,i)=>{
                    return (
                        <div id={i}>
                            <MangaVar4 idx={i}></MangaVar4>
                        </div>
                    )
                })
            }

        </div>
       
       </> 
    );
}

export default PopularTab;