import { IonCol, IonCard, IonRouterLink, IonGrid, IonRow } from "@ionic/react";
import ReactTimeAgo from "react-time-ago";

const FeedTabContentReducer = (state = <></>, action: any) => {
  switch (action.type) {
    case "Switch_FeedTab_Content":
      fetch(
        process.env.REACT_APP_BASE_URL +
          "/posts/?per_page=" +
          action.payload.count +
          "&categories=" +
          action.payload.category,
        { mode: "cors" }
      )
        .then((response) => response.json())
        .then((response) => {
          const html = response.map((feedItem: any) => (
            <IonCol
              key={feedItem.id}
              size="12"
              sizeSm="12"
              sizeMd="4"
              sizeLg="3"
            >
              <IonCard
                className="ion-no-margin"
                style={{ boxShadow: "unset", borderRadius: 0 }}
              >
                <IonRouterLink routerLink={"/article?id=" + feedItem.id}>
                  <IonGrid style={{ padding: 0 }}>
                    <IonRow>
                      <IonCol
                        size="4"
                        sizeSm="5"
                        sizeMd="5"
                        sizeLg="5"
                        style={{ padding: "0 5px 0 0" }}
                      >
                        <img
                          src={
                            feedItem.x_featured_media_medium
                              ? feedItem.x_featured_media_medium
                              : "/images/default.png"
                          }
                        />
                      </IonCol>
                      <IonCol>
                        <h4 className="feed-title" style={{ marginBottom: 0 }}>
                          {feedItem.title.rendered}
                        </h4>
                        <ReactTimeAgo date={feedItem.date} locale="en-US" /> |{" "}
                        {feedItem.x_categories}
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonRouterLink>
              </IonCard>
            </IonCol>
          ));

          return html;
        })
        .catch((err) => {
          // Error handling
        });

      return state;
      break;

    default:
      return null;
      break;
  }
};

export default FeedTabContentReducer;
