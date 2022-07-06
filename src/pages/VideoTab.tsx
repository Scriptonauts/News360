import { IonContent, IonPage} from '@ionic/react';
import React from 'react';
import AppHeader from '../components/AppHeader';
import VideoList from '../components/VideoList';

const VideoTab: React.FC = () => {

  return (
    <IonPage>
      <AppHeader title="Videos" backButton={ true } />
      <IonContent fullscreen>
        <VideoList></VideoList>
      </IonContent>
    </IonPage>
  );
};

export default VideoTab;
