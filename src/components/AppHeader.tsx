import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonButton,
} from "@ionic/react";
import PropTypes from "prop-types";
import "./AppHeader.css";
import { ellipsisVerticalOutline, bookmark } from "ionicons/icons";
import HeaderPopover from "./HeaderPopover";
import SearchForm from "./SearchForm";

const AppHeader = (props: any) => {
  const bookmarkHandler = () => {
    // getting id of the article
    const queryParams = new URLSearchParams(window.location.search);
    const articleID = queryParams.get("id");
    console.log(articleID);
    // check if a bookmark item exists in the storage
    let item = JSON.parse(localStorage.getItem("bookmarks")!);
    if (item === null) {
      item = [];
    }
    if (item.includes(articleID)) {
      console.log("this article is already bookmarked");
      return;
    }

    item.push(articleID);
    localStorage.setItem("bookmarks", JSON.stringify(item));
  };

  return (
    <IonHeader className="ionheader-section">
      <IonToolbar color="#33cc66" hidden={props.hideNav}>
        {props.backButton ? (
          <IonButtons slot="start">
            <IonBackButton defaultHref={"/home"} />
          </IonButtons>
        ) : null}

        {props.title !== "Search" ? (
          <IonTitle className="">
            {props.categoryName !== ""
              ? props.categoryName + " " + props.title
              : props.title}
          </IonTitle>
        ) : null}

        <IonButtons slot="primary">
          {props.title === "Article" ? (
            <IonButton
              onClick={() => bookmarkHandler()}
              fill="solid"
              color="secondary"
              className="btn"
              size="small"
            >
              <IonIcon icon={bookmark} slot="end" className="m-0 p-0" />
            </IonButton>
          ) : null}
          <IonButton fill="solid" color="secondary" id="search" className="btn">
            <IonIcon
              icon={ellipsisVerticalOutline}
              slot="end"
              className="m-0 p-0"
            />
          </IonButton>
        </IonButtons>

        {props.title === "Search" ? (
          <SearchForm searchHandler={(e: string) => props.searchHandler(e)} />
        ) : null}

        <HeaderPopover page={props.title} />
      </IonToolbar>
      {props.segment !== "" ? props.segment : null}
    </IonHeader>
  );
};

AppHeader.propTypes = {
  title: PropTypes.string.isRequired,
  hideNav: PropTypes.bool,
};
AppHeader.defaultProps = {
  backButton: false,
  segment: "",
  hideNav: false,
  categoryName: "",
  searchHandler: (e: any) => {
    return;
  },
};

export default AppHeader;
