import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import FeedCard from '../components/FeedCard';
import React from 'react';
import { useParams } from 'react-router-dom';
import AppHeader from '../components/AppHeader';

const CategoryFeed: React.FC = () => {

  const uriSegments: any = useParams();
  const catName = uriSegments.name[0].toUpperCase() + uriSegments.name.slice(1);

  return (
    <IonPage>
      <AppHeader title="Feeds" backButton={true} categoryName={catName} />
      <IonContent fullscreen>
        <FeedCard title='' count='20' categories={uriSegments.id}></FeedCard>
      </IonContent>
    </IonPage>
  );
};

export default CategoryFeed;
