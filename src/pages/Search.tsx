import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import AppHeader from '../components/AppHeader';

const Search: React.FC = (prop : object) => {

  return (
    <IonPage>
      <AppHeader title="Search" backButton={true}/>
      <IonContent fullscreen>

      </IonContent>
    </IonPage>
  );
};

export default Search;
