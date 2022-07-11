import { IonContent, IonPage, IonRow } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import YouTube from "react-youtube";

const SinglePlaylist: React.FC = () => {
  const [playList, setPlayList] = useState(<></>);
  const uriSegments: any = useParams();

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=" +
        uriSegments.pid +
        "&key=AIzaSyC6USfT6XFpEcfaFvIxEsrrGFKMAvztnpo&maxResults=25",
      { mode: "cors" }
    )
      .then((response) => response.json())
      .then((response) => {
        const html = response.items.slice(0, 10).map((videoItem: any) => (
          <>
            <YouTube
              videoId={videoItem.snippet.resourceId.videoId}
              opts={{
                width: window.screen.width,
                height: "230px",
                playerVars: {
                  autoplay: 1,
                  controls: 1,
                  rel: 0,
                  showinfo: 0,
                  modestbranding: 1,
                  iv_load_policy: 3,
                  cc_load_policy: 0,
                  disablekb: 1,
                  fs: 0,
                  fullscreen: 1,
                },
              }}
            />
          </>
        ));

        setPlayList(html);
      })
      .catch((err) => {
        // Error handling
      });
  }, []);

  return (
    <IonPage>
      <AppHeader title={uriSegments.title} backButton={true} />
      <IonContent fullscreen>
        <IonRow>{playList}</IonRow>
      </IonContent>
    </IonPage>
  );
};

export default SinglePlaylist;
