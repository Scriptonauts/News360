import {
  IonCard,
  IonCol,
  IonGrid,
  IonRouterLink,
  IonRow,
  IonSlide,
  IonSlides,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import ReactTimeAgo from "react-time-ago";
import "./FeedCard.css";

const slideOpts = {
  initialSlide: 0,
  speed: 900,
  slidesPerView: 1,
  autoplay: false,
};

const PlayListSlider: React.FC<any> = (props) => {
  const [slider, setSlider] = useState<any>(<></>);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_YT_PL_B_URL}?part=snippet&playlistId=PL39_ud5aKSvk5qvgLe70s5Vs4ezNz7Zli&key=${process.env.REACT_APP_GOOGLE_API_KEY}&maxResults=4`,
      { mode: "cors" }
    )
      .then((response) => response.json())
      .then((response) => {
        const html = response.items.map((videoItem: any) => (
          <IonSlide key={videoItem.id}>
            <IonCol
              key={videoItem.id}
              size="12"
              sizeSm="12"
              sizeMd="4"
              sizeLg="3"
            >
              <IonCard className="ion-no-margin">
                <IonRouterLink routerLink="/playlist-items">
                  <IonGrid className="iongrid">
                    <IonRow>
                      <IonCol
                        size="12"
                        sizeSm="12"
                        sizeMd="12"
                        sizeLg="12"
                        style={{ padding: "0 5px 0 0" }}
                      >
                        <div className="video-container">
                          <iframe
                            width="100%"
                            height=""
                            src={
                              "https://www.youtube.com/embed/" +
                              videoItem.snippet.resourceId.videoId
                            }
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </IonCol>
                      <IonCol>
                        <h4 className="feed-title">
                          {videoItem.snippet.title}
                        </h4>
                        <ReactTimeAgo
                          date={videoItem.snippet.publishedAt}
                          locale="en-US"
                        />{" "}
                        | {videoItem.snippet.channelTitle}
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonRouterLink>
              </IonCard>
            </IonCol>
          </IonSlide>
        ));

        const slider = (
          <IonSlides pager={true} options={slideOpts} style={{ padding: 0 }}>
            {html}
          </IonSlides>
        );
        setSlider(slider);
      })
      .catch((err) => {
        // Error handling
      });
  }, []);

  return <>{slider}</>;
};

export default PlayListSlider;
