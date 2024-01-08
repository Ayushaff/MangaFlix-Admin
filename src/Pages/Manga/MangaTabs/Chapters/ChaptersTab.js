import React, { memo, useEffect } from "react";
import Additional from "../../../../Components/AdditionalInfo/Additional";
import Volumes from "../../../../Components/VolumesFeed/Volumes";
import styles from "./chapters_tab.module.scss";
import MangaHeader from "../../MangaHeader/MangaHeader";
import MangaSynopsis from "../../MangaSynopsis/MangaSynopsis";
import PopularTab from "../../../../Components/AdditionalInfo/PopularTab";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ChaptersTab = memo(({ mangaId, mangaInfo }) => {
  const theme = useSelector((state) => state.theme);
  useEffect(()=>{
    
  },[]);
  return (
    <>
      {/* <MangaContent mangaId={mangaId} mangaInfo={mangaInfo} ></MangaContent> */}
      <div className={styles.wrapp} style={{
        color : theme.darkmode ? "white" : "black"
      }}>
        <div className="chapters-choose">
          <MangaTopBar mangaInfo={mangaInfo}/>

          <MangaHeader mangaInfo={mangaInfo} />

          <Volumes mangaId={mangaId} mangaInfo={mangaInfo}/>

          {/* need to pass stuff */}
          {/* <RelatedSeries /> */}
        </div>
        <div>
          <MangaTopBar1 mangaInfo={mangaInfo} />
          <div
            className="more-info"
            style={{
              backgroundColor: theme.colors.body,
            }}
          >
            {/* <Additional /> */}
            {/* need to pass stuff */}
            <PopularTab />
          </div>
        </div>
      </div>
    </>
  );
});


const MangaTopBar=({mangaInfo})=>{
  const theme = useSelector((state) => state.theme);
  return (
      <>
      <div className="manga-top-bar" style={{
        backgroundColor: theme.colors.body,
        color : theme.darkmode ? "white" : "black"
      }}>
          Mangaflix <span style={{color : theme.colors.trendingManga}}> &gt; </span> {mangaInfo?.data?.attributes?.title?.en}
      </div>
      </>
  );
}

const MangaTopBar1=({mangaInfo})=>{
  const theme = useSelector((state) => state.theme);
  return (
      <>
      <div className="manga-top-bar1" style={{
        backgroundColor: theme.colors.body,
        color : theme.darkmode ? "white" : "black"
      }}>
          <b><span style={{color : theme.darkmode ? "white" : "black"}}> Popular </span></b>
      </div>
      </>
  );
}



export default ChaptersTab;
