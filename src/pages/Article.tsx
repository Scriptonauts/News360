import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Article.css';
import React from 'react';
import { Markup } from 'interweave';
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'
import ReactTimeAgo from 'react-time-ago'
import { runInThisContext } from 'vm';
TimeAgo.addLocale(en)

class Article extends React.Component<any, any> {
  queryParams: URLSearchParams;
  articleId: any;
  articleImage: any;

  constructor(props: any) {
    super(props);
    this.queryParams = new URLSearchParams(window.location.search);
    this.articleId = this.queryParams.get('id');
    this.state = { article: '' }

  }

  componentDidMount() {

    fetch('https://kwekubright.com/hungry_project/wp-json/wp/v2/posts/?include[]=' + this.articleId, { mode: 'cors' })
      .then(response => response.json())
      .then(response => {

        const article = response.map((data: any) => (
          <IonGrid >
            <IonRow>
              <IonCol size='12'>
                <p className='article-cat-list'>{data.x_categories}</p>
                <h2 style={{ fontWeight: 600, marginBottom: 0 }}>{data.title.rendered}</h2>
                <p style={{ marginBottom: '1rem' }}>Posted: {new Date(data.date).toUTCString()}</p>

                <img src={data.x_featured_media_large} style={{ marginBottom: '1rem' }} />

              </IonCol>
              <IonCol>
                <Markup content={data.content.rendered} className="article-text" />
              </IonCol>
            </IonRow>
          </IonGrid>
        ));

        this.setState({ article: article });

      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <IonPage>
        <IonHeader style={{ backgroundColor: '#ad0000', color: '#ffffff' }}>
          <IonToolbar color='#33cc66'>
            <IonButtons slot="start">
              <IonBackButton defaultHref={"/home"} />
            </IonButtons>
            <IonTitle>Article</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent id="feed-tab-content-container" >
          {this.state.article}
        </IonContent>
      </IonPage>
    );
  }

}

export default Article;
