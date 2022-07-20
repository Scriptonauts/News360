import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonPage,
  IonRow,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import FeedCardComp from "../components/FeedCardComp";
import WPAPI from "wpapi";

const env = process.env;

const CategoryFeedPage: React.FC = () => {
  const uriSegments: any = useParams();
  const catName = uriSegments.name[0].toUpperCase() + uriSegments.name.slice(1);
  const [hideNav] = useState(false);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);

  const wp = new WPAPI({
    endpoint: "https://kwekubright.com/hungry_project/wp-json/",
  });

  useEffect(() => {
    fetchArticles();
  }, [])

  const fetchArticles = (page = 1) => 
    wp.posts()
      .perPage(10)
      .page(page)
      .categories(uriSegments.id)
      .get()
      .then((response: any) => {
        setArticles(articles.concat(response));
        page === response._paging.totalPages ? setInfiniteDisabled(true) : setPage(page + 1);
      })
      .catch((error: any) => {
        console.log(error);
      });
  

  const loadMore = async (): Promise<void> => { 
    fetchArticles(page);
  }

  return (
    <IonPage>
      <AppHeader
        title="Feeds"
        backButton={true}
        categoryName={catName}
        hideNav={hideNav}
      />
      <IonContent fullscreen>
        <IonRow>
          {
            articles.map((article: any) => {
              return <FeedCardComp key={article.id} article={article} />
            })
          }
        </IonRow>

        <IonInfiniteScroll
          onIonInfinite={loadMore}
          threshold="100px"
          disabled={isInfiniteDisabled}
        >
          <IonInfiniteScrollContent
            loadingSpinner="bubbles"
            loadingText="Loading more data..."
          ></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

export default CategoryFeedPage;
