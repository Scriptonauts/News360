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
import { ellipsisVerticalOutline } from "ionicons/icons";
import HeaderPopover from "./HeaderPopover";
import SearchForm from "./SearchForm";

const AppHeader = (props: any) => {
  return (
    <IonHeader className="ionheader-section">
      <IonToolbar color="#33cc66">
        {props.backButton ? (
          <IonButtons slot="start">
            <IonBackButton defaultHref={"/home"} />
          </IonButtons>
        ) : null}

        {props.title !== "Search" ? (
          <IonTitle>
            {props.categoryName !== ""
              ? props.categoryName + " " + props.title
              : props.title}
          </IonTitle>
        ) : null}

        <IonButtons slot="primary" id="search">
          <IonButton fill="solid" color="secondary">
            <IonIcon icon={ellipsisVerticalOutline} slot="end" />
          </IonButton>
        </IonButtons>

        {props.title === "Search" ? <SearchForm /> : null}

        <HeaderPopover />
      </IonToolbar>
      {props.segment !== "" ? props.segment : null}
    </IonHeader>
  );
};

AppHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
AppHeader.defaultProps = {
  backButton: false,
  segment: "",
  categoryName: "",
};

export default AppHeader;
