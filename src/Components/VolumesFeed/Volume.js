import React, { useEffect, useState } from "react";
import styles from "./chapters.module.scss";
import Chapters from "./Chapters";

const Volume = ({ volume, mangaInfo }) => {
  const [title, setTitle] = useState("");
  const [interval, setInterval] = useState([0, 0]);
  useEffect(() => {
    if (volume) {
      const title = Object.keys(volume)[0];
      setTitle(title);
      setInterval([
        Math.floor(volume[title][0]?.attributes?.chapter),
        Math.floor(
          volume[title][volume[title].length - 1]?.attributes?.chapter
        ),
      ]);
    }
  }, [volume]);

  return (
    <div className={styles.volume_item}>
      <div className={styles.volume_title}>
        <p
          style={{
            color: "#0D0D0D",
            fontSize: 18,
            fontFamily: "Fira Sans",
            fontWeight: "500"
          }}
        >
          {title}
        </p>

        <p
          style={{
            color: "#0D0D0D",
            fontSize: 17,
            fontFamily: "Fira Sans",
            fontWeight: "500",
          }}
        >
          {`Ch. ${interval[0]} - ${interval[1]}`}
        </p>

        <p
          style={{
            color: "#0D0D0D",
            fontSize: 17,
            fontFamily: "Fira Sans",
            fontWeight: "500",
          }}
        >
          {volume[title]?.length}
        </p>
      </div>
      <Chapters volume={volume[title]} mangaInfo={mangaInfo} />
    </div>
  );
};

export default Volume;
