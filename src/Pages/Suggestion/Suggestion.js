import { memo, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchLatestUpdates,
  fetchRecentlyAdded,
  fetchSeasonal,
} from "../../Store/Slices/suggestSlice";

import MainContainer from "../../Layouts/MainContainer/MainContainer";
import SuggestItem from "./SuggestItem";

import MangaItems from "../../Components/Manga/MangaVariables/MangaItems";
import LatestUpdates from "../../Components/Suggestions/LatestUpdates/LatestUpdates";
import "./suggestion.scss";

import Slider from "../../Features/Slider/Slider";
import SliderItem from "../../Features/Slider/SliderItem";

import MangaVar1 from "../../Components/Manga/MangaVariables/MangaVar1";
import MangaVar2 from "../../Components/Manga/MangaVariables/MangaVar2";
import Spinner from "../../SharedUI/LoadComponents/Spiner/Spinner";
import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import MangaVar3 from "../../Components/Manga/MangaVariables/MangaVar3";

const Suggestion = memo(() => {
  const dispatch = useDispatch();

  const seasonal = useSelector((state) => state.suggest.seasonal);
  const latestUpdates = useSelector((state) => state.suggest.latestUpdates);
  const recentlyAdded = useSelector((state) => state.suggest.recentlyAdded);
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    dispatch(fetchSeasonal());
    dispatch(fetchLatestUpdates());
    dispatch(fetchRecentlyAdded());
  }, []);

  return (
    <MainContainer
      mainClasses="suggestion-page"
      containerClasses="suggest-content"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>MangaFlix</title>
        <meta name="description" content={`Mangaflix manga homepage`} />
      </Helmet>

      <div
        style={{
          paddingLeft: "40px",
          paddingRight: "40px",
          paddingTop: "10px",
          paddingBottom: "20px",
          backgroundColor: theme.colors.trendingManga,
        }}
      >
        <SuggestItem title="TRENDING MANGA" link="titles/recently">
          {recentlyAdded.load.status === "loading" ? (
            <Spinner customStyle={{ width: "50px", height: "50px" }} />
          ) : (
            <Slider>
              <MangaItems
                mangas={recentlyAdded?.data}
                Variant={MangaVar2}
                Wrapp={SliderItem}
                styles={{
                  display: "flex",
                  width: "188px",
                  height: "260px",
                }}
              />
            </Slider>
          )}
        </SuggestItem>
      </div>

      {/* <SuggestItem title="Latest Updates" link="">
				<LatestUpdates chapters={latestUpdates?.data} />
			</SuggestItem> */}

      {/* <Banner></Banner> */}

      <SuggestItem title="Latest Update" link="titles/recently">
        {recentlyAdded.load.status === "loading" ? (
          <Spinner customStyle={{ width: "50px", height: "50px" }} />
        ) : (
          <Slider>
            <MangaItems
              mangas={recentlyAdded?.data}
              Variant={MangaVar3}
              Wrapp={SliderItem}
              styles={{ display: "flex", width: "128px", height: "180px" }}
            />
          </Slider>
        )}
      </SuggestItem>

      <SuggestItem title="Most Popular" link="titles/recently">
        {recentlyAdded.load.status === "loading" ? (
          <Spinner customStyle={{ width: "50px", height: "50px" }} />
        ) : (
          <Slider>
            <MangaItems
              mangas={recentlyAdded?.data}
              Variant={MangaVar2}
              Wrapp={SliderItem}
              styles={{ display: "flex", width: "128px", height: "180px" }}
            />
          </Slider>
        )}
      </SuggestItem>
      <SuggestItem title="Top Rated" link="titles/recently">
        {recentlyAdded.load.status === "loading" ? (
          <Spinner customStyle={{ width: "50px", height: "50px" }} />
        ) : (
          <Slider>
            <MangaItems
              mangas={recentlyAdded?.data}
              Variant={MangaVar2}
              Wrapp={SliderItem}
              styles={{ display: "flex", width: "128px", height: "180px" }}
            />
          </Slider>
        )}
      </SuggestItem>
    </MainContainer>
  );
});

export default Suggestion;
