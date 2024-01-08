import React, { memo, useMemo, useState } from "react";
import { useSelector } from "react-redux";

import Cover from "../../../SharedUI/StyledComponents/Cover/Cover";

import TagsStatus from "../../../SharedUI/Statistics/TagsStatus/TagsStatus";
import MangaStatus from "../../../Components/Manga/MangaStatus";

import { Rating, Follows, Seen } from "../../../SharedUI/Statistics";
import { filterSomeAttribute } from "../../../Utils/filterAttribute";
import MangaControls from "../MangaControls/MangaControls";
import MangaSynopsis from "../MangaSynopsis/MangaSynopsis";

const MangaHeader = memo(({ mangaInfo = {} }) => {
  const [mangaCoverUrl, setMangaCoverUrl] = useState("");
  const theme = useSelector((state) => state.theme);

  const backImage = useMemo(() => {
    if (mangaInfo.data) {
      const mangaCover = `https://uploads.mangadex.org/covers/${
        mangaInfo.data.id
      }/${
        filterSomeAttribute(mangaInfo.data.relationships, "cover_art")
          .attributes.fileName
      }`;
      setMangaCoverUrl(mangaCover);
      return {
        backgroundImage: `url(${mangaCover})`,
      };
    }
  }, [mangaInfo]);

  return (
    <>
      <div
        className="manga-header-box-main"
        style={{ color: theme.darkmode ? "white" : "black" }}
      >
        <div
          className="manga-header-box"
          style={{
            backgroundColor: theme.colors.body,
          }}
        >
          <div className="manga-header-box-1">
            <Cover
              src={mangaCoverUrl}
              alt=""
              classLists={{ wrapp: "manga-cover-cl", img: "" }}
              countryIco={mangaInfo?.data?.attributes?.originalLanguage}
            />
            <Bookmark />
            <BlackButtons />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: "1",
              justifyContent: "space-between",
            }}
          >
            <MangaTitle mangaInfo={mangaInfo} />
            <MangaVariablesStatus mangaInfo={mangaInfo} />
          </div>
        </div>
        {/* <MangaVariablesStatus mangaInfo={mangaInfo} /> */}
      </div>

      {/* <MangaIntroduction mangaInfo={mangaInfo} /> */}

      {/* <div className="banner-image" style={backImage}></div> */}
    </>
  );
});

const MangaTitle = memo(({ mangaInfo }) => {
  const theme = useSelector((state) => state.theme);
  const enTitle = useMemo(() => {
    const en = mangaInfo?.data?.attributes?.title?.en;
    const ja = mangaInfo?.data?.attributes?.title?.["ja-ro"];
    return en ? en : ja;
  }, [mangaInfo]);

  const alternative = useMemo(() => {
    const en = mangaInfo?.data?.attributes?.altTitles?.filter((el) => el.en)[0]
      ?.en;
    const ja = mangaInfo?.data?.attributes?.altTitles?.filter((el) => el.ja)[0]
      ?.ja;
    return en ? en : ja;
  }, [mangaInfo]);

  return (
    <div
      className="manga-title"
      style={{ color: theme.darkmode ? "white" : "black", zIndex: "105" }}
    >
      <div className="manga-title_wrapp">
        <div>
          <p
            className="main-title"
            style={{ color: theme.darkmode ? "white" : "black" }}
          >
            {enTitle}
          </p>
          <p
            className="second-title"
            style={{ color: theme.darkmode ? "white" : "black" }}
          >
            {alternative}
          </p>
        </div>
        {/* <MangaStatistics statistics={{}} /> */}
      </div>
      <div
        style={{
          height: "140px",
          overflow: "auto",
        }}
      >
        {mangaInfo?.data?.attributes?.description?.en}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          margin: "30px 20px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" ,marginRight :"50px"}}>
          <div style={{ display: "flex", flexDirection: "column"}}>
            <p style={{color : theme.darkmode ? "white" : "black",}}><b>Updated On</b></p>
            <p style={{color : theme.darkmode ? "white" : "black",}}>Jan 4, 2024</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column"}}>
            <p style={{color : theme.darkmode ? "white" : "black",}}><b>Author</b></p>
            <p style={{color : theme.darkmode ? "white" : "black",}}>Gege Akutami</p>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "column"}}>
            <p style={{color : theme.darkmode ? "white" : "black",}}><b>Artist</b></p>
            <p style={{color : theme.darkmode ? "white" : "black",}}>Nagi</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column"}}>
            <p style={{color : theme.darkmode ? "white" : "black",}}><b>Posted On</b></p>
            <p style={{color : theme.darkmode ? "white" : "black",}}>May 17, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
});

const MangaIntroduction = memo(({ mangaInfo }) => {
  const statistics = useSelector((state) => state.manga.statistics);

  return (
    <div className="introduction" style={{ zIndex: "105" }}>
      <MangaControls mangaInfo={mangaInfo} isAuthorize={false} />
      <MangaVariablesStatus mangaInfo={mangaInfo} />
      <MangaStatistics statistics={statistics.data} />
    </div>
  );
});

const MangaVariablesStatus = memo(({ mangaInfo = {} }) => {
  const theme = useSelector((state) => state.theme);
  const tags = useMemo(() => {
    if (mangaInfo.data) {
      return mangaInfo?.data?.attributes?.tags;
    }
  }, [mangaInfo.data]);

  const status = useMemo(() => {
    if (mangaInfo.data) {
      return mangaInfo?.data?.attributes?.status;
    }
  }, [mangaInfo.data]);

  const publicationYear = useMemo(() => {
    if (mangaInfo.data) {
      return mangaInfo?.data?.attributes?.year;
    }
  }, [mangaInfo.data]);

  return (
    <div className="manga-var-status">
      <div
        style={{
          color: theme.darkmode ? "white" : "black",
          marginBottom: "8px",
        }}
      >
        <p>
          <b>Genres</b>
        </p>
      </div>
      <TagsStatus tags={tags} amount={20} />
      {/* <MangaStatus
        status={status}
        additionalInfo={`Publication: ${publicationYear},`}
        styles={{
          textStyles: {
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: "12px",
          },
          blockStyles: { backgroundColor: "transparent", marginBottom: "5px" },
        }}
      /> */}
    </div>
  );
});

const MangaStatistics = memo(({ statistics = {} }) => {
  const stats = useMemo(() => {
    if (!!statistics) {
      return Object.values(statistics)[0];
    }
  }, [statistics]);

  return stats ? (
    <div className="manga-statistics">
      <Rating rating={stats.rating} details />
      <Follows follows={stats.follows} />
      <Seen statistic={statistics} />
    </div>
  ) : null;
});

const Bookmark = () => {
  return (
    <>
      <button
        style={{
          margin: "4px 10px",
          border: "2px solid #9EC8B9",
          backgroundColor: "#BDE4E4",
          padding: "10px 20px",
          borderRadius: "5px",
        }}
      >
        Bookmark
      </button>
    </>
  );
};

const BlackButtons = () => {
  return (
    <>
      <button
        style={{
          color: "#B8B8B8",
          margin: "4px 10px",
          backgroundColor: "#343434",
          padding: "6px 20px",
          borderRadius: "5px",
        }}
      >
        <p>Ratings</p>
      </button>
      <button
        style={{
          margin: "4px 10px",
          backgroundColor: "#343434",
          padding: "6px 20px",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <p style={{ color: "#B8B8B8" }}>Status</p>
          <p style={{ color: "#B8B8B8" }}>Ongoing</p>
        </div>
      </button>
      <button
        style={{
          margin: "4px 10px",
          backgroundColor: "#343434",
          padding: "6px 20px",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <p style={{ color: "#B8B8B8" }}>Type</p>
          <p style={{ color: "#B8B8B8" }}>Manga</p>
        </div>
      </button>
    </>
  );
};

export default MangaHeader;
