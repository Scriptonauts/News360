import { IonBackButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRouterLink, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactTimeAgo from 'react-time-ago';

const SinglePlaylist: React.FC = () => {
    const [playList, setPlayList] = useState(<></>);
    const uriSegments: any = useParams();

    useEffect(() => {
        fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=' + uriSegments.pid + '&key=AIzaSyC6USfT6XFpEcfaFvIxEsrrGFKMAvztnpo&maxResults=25', { mode: 'cors' })
            .then(response => response.json())
            .then(response => {
                const html = response.items.map(

                    (videoItem: any) => (

                        <IonCol key={videoItem.id} size='12' sizeSm='12' sizeMd='4' sizeLg='3'>
                            <IonCard className='ion-no-margin' style={{ boxShadow: 'unset', borderRadius: 0 }}>

                                <IonRouterLink routerLink="/playlist-items">
                                    <IonGrid style={{ padding: 0 }}>

                                        <IonRow  >
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

                    )
                );


                setPlayList(html);

            })
            .catch(err => {
                // Error handling
            });
    }, [])


    return (
        <IonPage >
            <IonHeader style={{ backgroundColor: '#ad0000', color: '#ffffff' }}>
                <IonToolbar color='#33cc66'>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                    <IonTitle>{uriSegments.title} </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Playlist</IonTitle>

                    </IonToolbar>
                </IonHeader>

                <IonRow>
                    {playList}
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default SinglePlaylist;
