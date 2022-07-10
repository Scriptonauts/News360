import { IonCol, IonContent, IonGrid, IonPage, IonRow } from "@ionic/react";
import React from "react";
import { Markup } from "interweave";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import AppHeader from "../components/AppHeader";
import { decode } from "html-entities";
import SocialSharing from "../components/SocialSharring";

TimeAgo.addLocale(en);

class Article extends React.Component<any, any> {
  queryParams: URLSearchParams;
  articleId: any;
  articleImage: any;

  constructor(props: any) {
    super(props);
    this.queryParams = new URLSearchParams(window.location.search);
    this.articleId = this.queryParams.get("id");
    this.state = { article: "" };
  }

  componentDidMount() {
    fetch(
      process.env.REACT_APP_BASE_URL + "/posts/?include[]=" + this.articleId,
      { mode: "cors" }
    )
      .then((response) => response.json())
      .then((response) => {
        const article = response.map((data: any, key: number) => (
          <IonGrid key={key}>
            <IonRow>
              <IonCol size="12">
                <p className="article-cat-list">{data.x_categories}</p>
                <h2 style={{ fontWeight: 600, marginBottom: 0 }}>
                  {decode(data.title.rendered, { level: "html5" })}
                </h2>
                <p style={{ marginBottom: "1rem" }}>
                  Posted: {new Date(data.date).toUTCString()}
                </p>

                <SocialSharing data={data} position="start" />

                {data.x_featured_media_large ? (
                  <img
                    src={data.x_featured_media_large}
                    style={{ marginBottom: "1rem" }}
                    alt={data.title.rendered}
                  />
                ) : (
                  ""
                )}
              </IonCol>
              <IonCol>
                <Markup
                  content={decode(data.content.rendered, { level: "html5" })}
                  className="article-text"
                />
                <SocialSharing data={data} position="center" />
              </IonCol>
            </IonRow>
          </IonGrid>
        ));

        this.setState({ article: article });
      })
      .catch((err) => {
        // Error handling
      });
  }

  render() {
    return (
      <IonPage>
        <AppHeader title="Article" backButton={true} />
        <IonContent id="feed-tab-content-container">
          {this.state.article}
        </IonContent>
      </IonPage>
    );
  }
}

export default Article;
