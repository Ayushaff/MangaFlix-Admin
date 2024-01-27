import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setReaderStatus } from "../../../Store/Slices/menuSlice";
import "./side-reader.scss";
import cover from "./cover.png";
import LinkList from "../../../SharedUI/Form/LinkList";
import Select from "../../../SharedUI/StyledComponents/Select/Select";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const SideReader = ({
  data,
  handleChapter,
  currentChapter,
  mangaTitle,
  currImg,
  maxImg,
  handleImage,
}) => {
  const [selected, setSelected] = useState("");
  const [pageSelected, setPageSelected] = useState(1);


  const [pages, setPages] = useState();
  const [chapters, setChapters] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      const chapters = [];

      for (let volume in data) {
        const chaptersNames = Object.keys(data[volume].chapters);
        for (let ch in data[volume].chapters) {
          const name = "Volume " + volume + " Ch. " + ch;
          const idx = chaptersNames.indexOf(ch) + 1;

          const chapter = {
            volume: volume,
            chapter: ch,
            counter: idx,
            name: name,
          };

          chapters.push(chapter);
        }
      }
      setChapters(chapters);
    }
  }, [data]);

  useEffect(() => {
    if (maxImg) {
      const pages = Array.from({ length: maxImg }, (_, i) => {
        return { name: i + 1 };
      });
      setPages(pages);
    } else {
      setPages([]);
    }
  }, [maxImg]);



  useEffect(() => {
    if (selected) {
      handleChapter(selected.volume, selected.chapter, selected.counter);
    }
  }, [selected]);

  useEffect(() => {
    if (pageSelected) {
      handleImage(pageSelected.name);
    }
  }, [pageSelected]);

  const handleDecrementPages = () => {
    console.log('Decrementing pages...', pageSelected);
    setPageSelected(pageSelected - 1);
  };

  return (
    <div
      className="side-chapter-wrapp"
      style={{ backgroundColor: "white", minWidth: "250px" }}
    >
      <div className="side-chapter-utils">
        <div onClick={() => dispatch(setReaderStatus(false))}>
          <svg
            data-v-20f285ec=""
            data-v-6b3fd699=""
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-currentColor icon"
          >
            <path
              data-v-20f285ec=""
              d="M18 6 6 18M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        {/* <div>
                    <svg data-v-20f285ec="" data-v-6b3fd699="" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="text-currentColor icon"><path data-v-20f285ec="" d="m3 21 5-5m2-6-1 1s-2-2-5 1l8 8c3-3 1-5 1-5l1-1M1 1l22 22m-6-12 2-2h2l-6-6v2l-2 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </div> */}
      </div>
      <div className="sd-ch-links">
        <div>
          <LinkList
            ico={
              <svg
                data-v-20f285ec=""
                data-v-79551784=""
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-book-open text-icon-black dark:text-icon-white text-false icon"
              >
                <path
                  data-v-20f285ec=""
                  d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zm20 0h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
                ></path>
              </svg>
            }
            title={mangaTitle}
            isSvg={true}
          ></LinkList>
        </div>
        <div
          className="line"
          style={{
            backgroundColor: "black",
            position: "relative",
            left: "30px",
            width: "250px",
            height: "2px",
          }}
        ></div>
        <div className="sideCover">
          <img src={cover}></img>
          {/* <LinkList
            ico={
              <svg
                data-v-20f285ec=""
                data-v-79551784=""
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-icon-black dark:text-icon-white text-false icon"
              >
                <path
                  data-v-20f285ec=""
                  d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-7-7Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  data-v-20f285ec=""
                  d="M13 2v7h7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            isSvg={true}
          />
            } */}
          <p> {`Ch. ${currentChapter.chapter}`}</p>
        </div>
        &nbsp;
      </div>
      <div className="ok">
        <div className="side-chapter-controls">
          <div style={{ display: "flex", flexDirection: "row", gap: "10px", marginRight: "20px", marginBottom: "10px", marginTop: "10px" }}>

            <button
              onClick={handleDecrementPages} style={{ marginLeft: "10px", height: "70px", marginTop: "16px", }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke="black" strokeWidth="1px" borderRadius="12px" width="34" height="50"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" /></svg>
            </button>


            <Select
              values={pages}
              selected={pageSelected}
              setSelected={setPageSelected}
              selectTitle="Page"
              customStyles={{ height: "25px" }}
              beforePageContent={<p>Pg. </p>}
              onDecrementPages={handleDecrementPages}
            />
            
            <button
              onClick={handleDecrementPages} style={{ marginLeft: "10px", height: "70px", marginTop: "16px", }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke="black" strokeWidth="1px" borderRadius="12px" width="34" height="50"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" /></svg>
            </button>



          </div>

          <div style={{ display: "flex", flexDirection: "row", gap: "10px", marginRight: "20px", marginBottom: "10px", marginTop: "10px" }}>


            <button
              onClick={handleDecrementPages} style={{ marginLeft: "10px", height: "70px", marginTop: "16px", }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke="black" strokeWidth="1px" borderRadius="12px" width="34" height="50"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" /></svg>
            </button>
            <Select
              values={chapters}
              selected={selected}
              setSelected={setSelected}
              selectTitle="Chapter"
              customStyles={{ height: "25px", marginBottom: "50px" }}
              beforePageContent={<p></p>}
            />
            <button
              onClick={handleDecrementPages} style={{ marginLeft: "10px", height: "70px", marginTop: "16px", }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke="black" strokeWidth="1px" borderRadius="12px" width="34" height="50"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" /></svg>
            </button>
          </div>

          <div className="vertical">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><path d="M96 32H32C14.3 32 0 46.3 0 64v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm0 160H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32zm0 160H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32zM288 32h-64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm0 160h-64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32zm0 160h-64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32z" /></svg>
            <p>Vertical</p>
          </div>
          <div className="single">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" /></svg>
            <p>Single Page</p>
          </div>
        </div>
      </div>
      <hr style={{ width: "100%", opacity: "0.4", margin: "1rem 0px" }} />

      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          marginLeft: "7px",
        }}
      > */}
      {/* <LinkList ico={<svg data-v-20f285ec="" data-v-79551784="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-book-open text-icon-black dark:text-icon-white text-false icon"><path data-v-20f285ec="" d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zm20 0h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>} 
                    title="Current manga" isSvg={true} bgColor={'#f0f1f2'}></LinkList> */}
      {/* </div> */}
    </div>
  );
};

export default SideReader;
