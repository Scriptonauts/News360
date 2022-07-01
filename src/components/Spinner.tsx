import { IonSpinner } from "@ionic/react";
import React from "react";

export default class Spinner extends React.Component<any, any>{
    render() {
        return (
          <div className='ion-text-center'>
            <IonSpinner name="bubbles" style={{ margin: '100px auto' }} />
          </div>
        );
    }
}