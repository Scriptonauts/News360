import { IonPopover, IonContent, IonList, IonItem } from "@ionic/react";
import React from "react";

const HeaderPopover: React.FC = () => { 
  return (
    <IonPopover trigger="search" triggerAction="click">
      <IonContent class="ion-padding">
        <IonList>
          <IonItem button={true} detail={false} href="/search">Search</IonItem>
        </IonList>
      </IonContent>
    </IonPopover>
  );
}

export default HeaderPopover;