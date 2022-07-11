import React from "react";
import { IonSlides, IonSlide, IonRouterLink } from "@ionic/react";
import Spinner from "./Spinner";
import { decode } from "html-entities";
import { url } from "inspector";

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

class FeedSlider extends React.Component<any, any> {
  addCategories: any;
  slideList: any;
  slide: any;
  constructor(props: any) {
    super(props);
    this.state = { slideList: <Spinner />, addCategories: "" };
  }

  buildSlide = (feedItem: any) => {
    let img = "";
    feedItem.x_featured_media_medium != null
      ? (img = "url(" + feedItem.x_featured_media_medium + ")")
      : (img = "url(/images/default.png)");

    const style = {
      height: "250px",
      backgroundImage: img,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "red",
    };

    return (
      <IonSlide key={feedItem.id} style={style}>
        <IonRouterLink routerLink={"/article?id=" + feedItem.id}>
          <div className="bottom-left">
            <h3 className="slider-title">
              {decode(feedItem.title.rendered, { level: "html5" })}
            </h3>
          </div>
        </IonRouterLink>
      </IonSlide>
    );
  };

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
        const html = response.map((feedItem: any) => this.buildSlide(feedItem));

        this.setState({ slideList: html });

        const slide_ = (
          <IonSlides pager={true} options={slideOpts}>
            {this.state.slideList}
          </IonSlides>
        );

        this.setState({ slide: slide_ });
      })
      .catch((err) => {
        // Error handling
      });
  }

  render(): React.ReactNode {
    return <>{this.state.slide}</>;
  }
}

export default FeedSlider;
