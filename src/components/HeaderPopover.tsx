import { IonPopover, IonContent, IonList, IonItem } from "@ionic/react";
import React from "react";

const HeaderPopover = (props: any) => {
  return (
    <>
      {props.page !== "Search" ? (
        <IonPopover trigger="search" triggerAction="click">
          <IonList>
            <IonItem button={true} detail={false} href="/search" lines="none">
              🔍 Search
            </IonItem>
          </IonList>
        </IonPopover>
      ) : null}
    </>
  );
};

export default HeaderPopover;
