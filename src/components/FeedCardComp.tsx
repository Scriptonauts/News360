import { IonCol, IonCard, IonRouterLink, IonGrid, IonRow } from "@ionic/react";
import { decode } from "html-entities";
import ReactTimeAgo from "react-time-ago";
import PropTypes from "prop-types";

const FeedCardComp = (props: any) => {
  const article = props.article;
  return (
    <IonCol key={article.id} size="12" sizeSm="12" sizeMd="4" sizeLg="3">
      <IonCard
        className="ion-no-margin"
        style={{ boxShadow: "unset", borderRadius: 0 }}
      >
        <IonRouterLink routerLink={"/article?id=" + article.id}>
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
                    article.x_featured_media_medium
                      ? article.x_featured_media_medium
                      : "/images/default.png"
                  }
                />
              </IonCol>
              <IonCol>
                <h4 className="feed-title" style={{ marginBottom: 0 }}>
                  {decode(article.title.rendered, {
                    level: "html5",
                  })}
                </h4>
                <ReactTimeAgo date={article.date} locale="en-US" />
                {article.x_categories
                  .split(",")
                  .splice(0, 1)
                  .join(", ")
                  .replace(/^\w/, (chr: string) => {
                    return chr.toUpperCase();
                  })}
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonRouterLink>
      </IonCard>
    </IonCol>
  );
};

FeedCardComp.propTypes = {
  article: PropTypes.object.isRequired,
};

export default FeedCardComp;
