import { IonSpinner } from "@ionic/react";
import React from "react";
import "./FeedCard.css";

export default class Spinner extends React.Component<any, any> {
  render() {
    return (
      <div className="ion-text-center">
        <IonSpinner name="bubbles" />
      </div>
    );
  }
}
