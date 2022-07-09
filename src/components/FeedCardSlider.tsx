import React from "react";
import {
  IonSlides,
  IonSlide,
  IonCol,
  IonCard,
  IonGrid,
  IonRow,
} from "@ionic/react";
import ReactTimeAgo from "react-time-ago";
import Spinner from "./Spinner";

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 400,
  slidesPerView: 1,
  autoplay: true,
};

class FeedCardSlider extends React.Component<any, any> {
  addCategories: any;

  constructor(props: any) {
    super(props);
    this.state = { feedList: "", slider: <Spinner />, addCategories: "" };
  }

  componentDidMount() {
    if (this.props.categories) {
      const catQ = "&categories=" + this.props.categories;
      this.addCategories = catQ;
    }

    fetch(
      `${process.env.REACT_APP_BASE_URL}/posts/?per_page=${
        this.props.count + this.addCategories
      }`,
      { mode: "cors" }
    )
      .then((response) => response.json())
      .then((response) => {
        const html = response.map((feedItem: any) => (
          <IonSlide key={feedItem.id}>
            <IonCol size="12" sizeSm="12" sizeMd="4" sizeLg="3">
              <IonCard
                className="ion-no-margin"
                routerLink="/article"
                style={{ boxShadow: "unset", borderRadius: 0 }}
              >
                <IonGrid style={{ padding: 0 }}>
                  <IonRow>
                    <IonCol
                      size="4"
                      sizeSm="5"
                      sizeMd="5"
                      sizeLg="5"
                      style={{ padding: "0 5px 0 0" }}
                    >
                      <img src={feedItem.x_featured_media_medium} />
                    </IonCol>
                    <IonCol>
                      <h4 className="feed-title" style={{ marginBottom: 0 }}>
                        {feedItem.title.rendered}
                      </h4>
                      <ReactTimeAgo date={feedItem.date} locale="en-US" />
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCard>
            </IonCol>
          </IonSlide>
        ));

        this.setState({ feedList: html });

        const slider = (
          <IonGrid style={{ paddingTop: "0rem", marginTop: "0rem" }}>
            <IonRow>
              <IonSlides
                pager={true}
                options={slideOpts}
                style={{ padding: 0 }}
              >
                {this.state.feedList}
              </IonSlides>
            </IonRow>
          </IonGrid>
        );
        this.setState({ slider: slider });
      })
      .catch((err) => {
        this.setState({ slider: <Spinner /> });
      });
  }

  render() {
    return (
      <>
        <h4 style={{ marginLeft: "1rem" }}>{this.props.title}</h4>
        <>{this.state.slider}</>
      </>
    );
  }
}

export default FeedCardSlider;
