import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VideoList from '../components/VideoList';

const VideoTab: React.FC = () => {


  const uriSegments: any = useParams();

  useEffect(() => {

  }, [])


  return (
    <IonPage>
      <IonHeader style={{ backgroundColor: '#ad0000', color: '#ffffff' }}>
        <IonToolbar color='#33cc66'>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Shows </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Videos</IonTitle>

          </IonToolbar>
        </IonHeader>

        <VideoList></VideoList>

      </IonContent>
    </IonPage>
  );


};

export default VideoTab;
