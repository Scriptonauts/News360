import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import FeedCard from '../components/FeedCard';
import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryFeed: React.FC = () => {

  const uriSegments: any = useParams();

  return (
    <IonPage>
      <IonHeader style={{ backgroundColor: '#ad0000', color: '#ffffff' }}>
        <IonToolbar color='#33cc66'>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>{uriSegments.name} Feed </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Feed</IonTitle>

          </IonToolbar>
        </IonHeader>
        <FeedCard title='' count='20' categories={uriSegments.id}></FeedCard>
      </IonContent>
    </IonPage>
  );


};

export default CategoryFeed;
