import React, { memo } from "react";
import Additional from "../../../../Components/AdditionalInfo/Additional";
import Volumes from "../../../../Components/VolumesFeed/Volumes";
import styles from "./chapters_tab.module.scss";
import MangaHeader from "../../MangaHeader/MangaHeader";
import MangaSynopsis from "../../MangaSynopsis/MangaSynopsis";

const ChaptersTab = memo(({ mangaId, mangaInfo }) => {
  return (
    <>
      {/* <MangaContent mangaId={mangaId} mangaInfo={mangaInfo} ></MangaContent> */}
      <div className={styles.wrapp}>
        <div className="chapters-choose">
          <MangaHeader mangaInfo={mangaInfo} />
          <MangaSynopsis
            description={mangaInfo?.data?.attributes?.description?.en}
          />
          <Volumes mangaId={mangaId} />
        </div>
        <div className="more-info">
          <Additional />
        </div>
      </div>
    </>
  );
});

export default ChaptersTab;
