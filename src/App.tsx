import { Redirect, Route, Switch } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { home, newspaper, videocam } from "ionicons/icons";

import "moment-timezone";

import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import FeedTab from "./pages/FeedTab";
import Article from "./pages/Article";
import CategoryFeed from "./pages/CategoryFeed";
import VideoTab from "./pages/VideoTab";
import SinglePlaylist from "./pages/SinglePlaylist";
import Search from "./pages/Search";
import CategoryFeedPage from "./pages/CategoryFeedPage";

setupIonicReact();

const App: React.FC = (props: any) => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route path="/category/:id/:name">
              <CategoryFeedPage />
            </Route>
            <Route exact path="/article">
              <Article />
            </Route>
            <Route exact path="/feed/">
              <FeedTab />
            </Route>
            <Route path="/video">
              <VideoTab />
            </Route>
            <Route path="/playlist-items/:pid/:title">
              <SinglePlaylist />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" hidden={props.hideTabBar}>
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="feedtab" href="/feed">
            <IonIcon icon={newspaper} />
            <IonLabel>Feed</IonLabel>
          </IonTabButton>
          <IonTabButton tab="videotab" href="/video">
            <IonIcon icon={videocam} />
            <IonLabel>Videos</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

App.defaultProps = {
  hideTabBar: false,
};

export default App;
