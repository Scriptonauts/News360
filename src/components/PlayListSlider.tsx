import { present } from '@ionic/core/dist/types/utils/overlays';
import { IonBackButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRouterLink, IonRow, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactTimeAgo from 'react-time-ago';
import VideoList from './VideoList';



const slideOpts = {
    initialSlide: 0,
    speed: 900,
    slidesPerView: 1,
    autoplay: false

};

const PlayListSlider: React.FC<any> = (props) => {


    const [playList, setPlayList] = useState<any>(<></>);
    const [slider, setSlider] = useState<any>(<></>);

    const uriSegments: any = useParams();

    useEffect(() => {
      fetch(`${process.env.REACT_APP_YT_PL_B_URL}?part=snippet&playlistId=PL39_ud5aKSvk5qvgLe70s5Vs4ezNz7Zli&key=${process.env.REACT_APP_GOOGLE_API_KEY}&maxResults=4`, { mode: 'cors' })
            .then(response => response.json())
            .then(response => {
                const html = response.items.map(

                    (videoItem: any) => (
                        <IonSlide key={videoItem.id}>
                            <IonCol key={videoItem.id} size='12' sizeSm='12' sizeMd='4' sizeLg='3'>
                                <IonCard className='ion-no-margin' style={{ boxShadow: 'unset', borderRadius: 0 }}>

                                    <IonRouterLink routerLink="/playlist-items">
                                        <IonGrid style={{ padding: 0 }}>

                                            <IonRow >
                                                <IonCol size="12" sizeSm='12' sizeMd='12' sizeLg='12' style={{ padding: '0 5px 0 0' }}>
                                                    <div className="video-container">
                                                        <iframe width="100%" height="" src={"https://www.youtube.com/embed/" + videoItem.snippet.resourceId.videoId} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                                                    </div>


                                                </IonCol>
                                                <IonCol>
                                                    <h4 className='feed-title' style={{ marginBottom: 0 }}>{videoItem.snippet.title}</h4>
                                                    <ReactTimeAgo date={videoItem.snippet.publishedAt} locale="en-US" /> | {videoItem.snippet.channelTitle}
                                                </IonCol>
                                            </IonRow>
                                        </IonGrid>
                                    </IonRouterLink>

                                </IonCard>

                            </IonCol>
                        </IonSlide>

                    )
                );

                const slider = (

                    <IonSlides pager={true} options={slideOpts} style={{ padding: 0 }}>
                        {html}
                    </IonSlides>
                );
                setSlider(slider);

            })
            .catch(err => {
                console.log(err);
            });
    }, [])


    return (
        <>{slider}</>
    );


};

export default PlayListSlider;
