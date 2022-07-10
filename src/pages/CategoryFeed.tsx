import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import FeedCard from "../components/FeedCard";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AppHeader from "../components/AppHeader";

const CategoryFeed: React.FC = () => {
  const uriSegments: any = useParams();
  const catName = uriSegments.name[0].toUpperCase() + uriSegments.name.slice(1);
  const [hideNav, setHideNav] = useState(false);

  const scrollHandler: any = (e: any): void => {
    if (e.detail.scrollTop > 0) {
      setHideNav(true);
    }

    if (e.detail.scrollTop < 500) {
      setHideNav(false);
    }
  };

  return (
    <IonPage>
      <AppHeader
        title="Feeds"
        backButton={true}
        categoryName={catName}
        hideNav={hideNav}
      />
      <IonContent fullscreen onIonScroll={(e) => scrollHandler(e)}>
        <FeedCard
          title=""
          count="20"
          categories={uriSegments.id}
          catName={catName}
        ></FeedCard>
      </IonContent>
    </IonPage>
  );
};

export default CategoryFeed;
