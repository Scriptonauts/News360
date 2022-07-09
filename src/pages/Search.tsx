import { IonContent, IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import AppHeader from "../components/AppHeader";
import FeedCard from "../components/FeedCard";

const Search: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(<></>);

  const formHandler = (e: string) => {
    setSearchText(e);
  };

  useEffect(() => {
    setSearchResults(<FeedCard searchText={searchText} pageName="search" />);
  }, [searchText]);

  return (
    <IonPage>
      <AppHeader
        title="Search"
        backButton={true}
        searchHandler={(e) => formHandler(e)}
      />
      <IonContent fullscreen>{searchResults}</IonContent>
    </IonPage>
  );
};

export default Search;
