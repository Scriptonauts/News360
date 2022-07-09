import {
  IonCol,
  IonCard,
  IonRouterLink,
  IonGrid,
  IonRow,
  IonContent,
  IonModal,
} from "@ionic/react";
import { useEffect, useState } from "react";
import ReactTimeAgo from "react-time-ago";
import "./FeedCard.css";

const VideoList: React.FC<any> = () => {
  const [videoList, setVideoList] = useState(<></>);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCvJiYiBUbw4tmpRSZT2r1Hw&maxResults=25&key=AIzaSyC6USfT6XFpEcfaFvIxEsrrGFKMAvztnpo",
      { mode: "cors" }
    )
      .then((response) => response.json())
      .then((response) => {
        const html = response.items.map((videoItem: any) => (
          <IonCol
            key={videoItem.id}
            size="12"
            sizeSm="12"
            sizeMd="4"
            sizeLg="3"
          >
            <IonCard className="ion-no-margin">
              <IonRouterLink
                routerLink={
                  "/playlist-items/" +
                  videoItem.id +
                  "/" +
                  videoItem.snippet.title
                }
              >
                <IonGrid style={{ padding: 0 }}>
                  <IonRow>
                    <IonCol
                      className="ioncol1"
                      size="12"
                      sizeSm="12"
                      sizeMd="12"
                      sizeLg="12"
                    >
                      <img
                        src={
                          videoItem.snippet.thumbnails.hasOwnProperty.call(
                            "maxres"
                          )
                            ? videoItem.snippet.thumbnails.maxres.url
                            : videoItem.snippet.thumbnails.high.url
                        }
                      />
                    </IonCol>
                    <IonCol>
                      <h4 className="feed-title">{videoItem.snippet.title}</h4>
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
        ));

        setVideoList(html);
      })
      .catch((err) => {
        // Error handling
      });
  }, []);

  return (
    <>
      <IonGrid className="grid">
        <IonRow>{videoList}</IonRow>
      </IonGrid>

      <IonModal trigger="video-card">
        <IonContent>Modal Content</IonContent>
      </IonModal>
    </>
  );
};

export default VideoList;
