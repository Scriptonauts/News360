import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { ReactNode } from "react";
import AppHeader from "../components/AppHeader";
import FeedCard from "../components/FeedCard";
import FeedCardSlider from "../components/FeedCardSlider";
import FeedCategoryMason from "../components/FeedCategoryMason";
import FeedCategorySlider from "../components/FeedCategorySlider";
import FeedSlider from "../components/FeedSlider";

class Home extends React.Component<any, any> {
  categories: any = [];
  constructor(props: any) {
    super(props);
    this.state = { catList: "", hideNav: false, hideTabBar: false };
  }

  componentDidMount() {
    //Lets fetch all categories
    fetch(process.env.REACT_APP_BASE_URL + "/categories?per_page=13", {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => {
        localStorage.setItem("categories", JSON.stringify(response));

        const html = response.map((catItem: any) =>
          this.categories.push(catItem.id)
        );
        //Lets save category ids locally
        localStorage.setItem("category-ids", JSON.stringify(this.categories));
      })
      .catch((err) => {
        // Error handling
      });
  }

  render(): ReactNode {
    return (
      <IonPage>
        <AppHeader title="Home" hideNav={this.state.hideNav} />
        <IonContent fullscreen>
          <FeedSlider
            count="5"
            categories={process.env.REACT_APP_SLIDER_CATEGORY_ID}
          ></FeedSlider>
          <FeedCategorySlider></FeedCategorySlider>

          <FeedCard
            title="Top stories"
            count="5"
            categories={process.env.REACT_APP_TOP_STORIES_ID}
          ></FeedCard>

          <FeedCardSlider
            title="Opinions"
            count="5"
            categories={process.env.REACT_APP_SLIDER_CATEGORY_ID}
          ></FeedCardSlider>

          {/* <PlayListSlider count="10"></PlayListSlider> */}

          <FeedCard
            title="Other news"
            count="5"
            categories={process.env.REACT_APP_TOP_STORIES_ID}
          ></FeedCard>
          <FeedCategoryMason></FeedCategoryMason>
        </IonContent>
      </IonPage>
    );
  }
}

export default Home;
