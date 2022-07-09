import { IonSearchbar } from "@ionic/react";
import { useEffect, useState } from "react";
import "./css-modules/Search.css";

const SearchForm = (props: any) => {
  const [searchText, setSearchText] = useState("");
  const formHandler = (searchString: string) => {
    props.searchHandler(searchString);
  };

  useEffect(() => {
    formHandler(searchText);
  }, [searchText]);

  return (
    <div className="search-form">
      <IonSearchbar
        placeholder="Type to search..."
        onIonChange={(e) => setSearchText(e.detail.value!)}
        onIonClear={() => props.setSearchText("")}
        id="search-bar"
      />
    </div>
  );
};

export default SearchForm;
