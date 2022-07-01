import { IonBackButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRouterLink, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './FeedTab.css';
import FeedSegment from '../components/FeedSegment';
import React from 'react';
import ReactTimeAgo from 'react-time-ago';

class FeedTab extends React.Component<any, any> {
  queryParams: any;
  feedCategoryID: any;
  feedCategoryName: any;
  segment: any;
  addCategories: any;

  constructor(props: any) {
    super(props);
    this.feedCategoryName = '';
    this.state = { feedCategoryName: '', segment: '', content: '', feedList: '', feedCount: '30', isSingleCat: false, catId: null };
    this.queryParams = new URLSearchParams(window.location.search);
    this.feedCategoryID = this.queryParams.get('cat_id');
    this.feedCategoryName = this.queryParams.get('cat_name');
    this.segmentHandler = this.segmentHandler.bind(this);
  }

  componentWillMount() {

    if (this.queryParams.get('cat_name') == null || this.queryParams.get('show_cat') == 0) {
      this.setState({ feedCategoryName: '', segment: <FeedSegment segmentHandler={this.segmentHandler}></FeedSegment> })
    }

    if (this.queryParams.get('cat_name') !== null || this.queryParams.get('show_cat') !== 0) {
      //alert('Show cat ' + this.feedCategoryID);
      this.setState({ catId: this.feedCategoryID, isSingleCat: true });
    }

    if (this.feedCategoryName !== '') {
      this.setState({ feedCategoryName: this.feedCategoryName })
    }

    let catQ = '&categories=' + ((this.state.isSingleCat == true) ? this.state.catId : JSON.parse(localStorage.getItem('category-ids')!)[0]);
    this.addCategories = catQ;

    fetch('https://kwekubright.com/hungry_project/wp-json/wp/v2/posts/?per_page=' + this.state.feedCount + this.addCategories, { mode: 'cors' })
      .then(response => response.json())
      .then(response => {
        let html = response.map(
          (feedItem: any) => (
            <IonCol key={feedItem.id} size='12' sizeSm='12' sizeMd='4' sizeLg='3'>
              <IonCard className='ion-no-margin' style={{ boxShadow: 'unset', borderRadius: 0 }}>
                <IonRouterLink routerLink={'/article?id=' + feedItem.id}>
                  <IonGrid style={{ padding: 0 }}>

                    <IonRow  >
                      <IonCol size="4" sizeSm='5' sizeMd='5' sizeLg='5' style={{ padding: '0 5px 0 0' }}>
                        <img src={feedItem.x_featured_media_medium ? feedItem.x_featured_media_medium : '/images/default.png'} />
                      </IonCol>
                      <IonCol>
                        <h4 className='feed-title' style={{ marginBottom: 0 }}>{feedItem.title.rendered}</h4>
                        <ReactTimeAgo date={feedItem.date} locale="en-US" /> | {feedItem.x_categories}
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonRouterLink>
              </IonCard>

            </IonCol>

          )
        );
        this.setState({ feedList: html });
      })
      .catch(err => {
        console.log(err);
      });
  }

  segmentHandler() {
    let active = localStorage.getItem('feed-active-segment');

    let catQ = '&categories=' + localStorage.getItem('feed-active-segment');
    this.addCategories = catQ;

    this.setState({ content: active })
    fetch('https://kwekubright.com/hungry_project/wp-json/wp/v2/posts/?per_page=' + this.state.feedCount + this.addCategories, { mode: 'cors' })
      .then(response => response.json())
      .then(response => {
        let html = response.map(
          (feedItem: any) => (
            <IonCol key={feedItem.id} size='12' sizeSm='12' sizeMd='4' sizeLg='3'>
              <IonCard className='ion-no-margin' style={{ boxShadow: 'unset', borderRadius: 0 }}>
                <IonRouterLink routerLink={'/article?id=' + feedItem.id}>
                  <IonGrid style={{ padding: 0 }}>

                    <IonRow  >
                      <IonCol size="4" sizeSm='5' sizeMd='5' sizeLg='5' style={{ padding: '0 5px 0 0' }}>
                        <img src={feedItem.x_featured_media_medium ? feedItem.x_featured_media_medium : '/images/default.png'} />
                      </IonCol>
                      <IonCol>
                        <h4 className='feed-title' style={{ marginBottom: 0 }}>{feedItem.title.rendered}</h4>
                        <ReactTimeAgo date={feedItem.date} locale="en-US" /> | {feedItem.x_categories}
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonRouterLink>
              </IonCard>

            </IonCol>

          )
        );
        this.setState({ feedList: html });
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
              <IonBackButton defaultHref="/home" />
            </IonButtons>
            <IonTitle>{this.state.feedCategoryName} Feed</IonTitle>
          </IonToolbar>
          {this.state.segment}
        </IonHeader>
        <IonContent id="feed-tab-content-container" fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Feed</IonTitle>

            </IonToolbar>
          </IonHeader>
          <h4 style={{ marginLeft: "1rem" }}>{this.props.title}</h4>
          <IonGrid style={{ paddingTop: '0rem', marginTop: '0rem' }}>
            <IonRow >{this.state.feedList}</IonRow></IonGrid >
        </IonContent>
      </IonPage>
    );
  };
};

export default FeedTab;