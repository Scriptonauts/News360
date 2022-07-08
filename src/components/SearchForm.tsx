import { IonSearchbar } from "@ionic/react";
import React, { useState } from "react";
import './css-modules/Search.css';

const SearchForm: React.FC = (props: object) => {
  const [searchText, setSearchText] = useState('');
  return (
    <IonSearchbar id="search-form" value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
  )
}

export default SearchForm;