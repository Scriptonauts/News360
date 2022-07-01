import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { ReactNode } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import FeedCard from '../components/FeedCard';
import FeedCardSlider from '../components/FeedCardSlider';
import FeedCategoryMason from '../components/FeedCategoryMason';
import FeedCategorySlider from '../components/FeedCategorySlider';
import FeedSlider from '../components/FeedSlider';
import PlayListSlider from '../components/PlayListSlider';
import './Home.css';

class Home extends React.Component<any, any>{
  categories = Array();
  constructor(props: any) {
    super(props);
    this.state = { catList: '' }
  }

  componentDidMount() {
    //Lets fetch all categories
    fetch('https://kwekubright.com/hungry_project/wp-json/wp/v2/categories', { mode: 'cors' })
      .then(response => response.json())
      .then(response => {

        localStorage.setItem('categories', JSON.stringify(response));

        let html = response.map(
          (catItem: any) =>
          (
            this.categories.push(catItem.id)
          )
        );
        //Lets save category ids locally
        localStorage.setItem('category-ids', JSON.stringify(this.categories));
      })
      .catch(err => {
        console.log(err);
      });
  }

  render(): ReactNode {
    console.log(process.env.REACT_APP_SLIDER_CATEGORY_ID);
    return (
      <IonPage>
        <IonHeader style={{ backgroundColor: '#ad0000', color: '#ffffff' }}>
          <IonToolbar color='#33cc66'>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Home</IonTitle>

            </IonToolbar>
          </IonHeader>
          <FeedSlider count='5' categories={process.env.REACT_APP_SLIDER_CATEGORY_ID}></FeedSlider>
          <FeedCategorySlider></FeedCategorySlider>


          <FeedCard title='Top stories' count='5' categories={process.env.REACT_APP_TOP_STORIES_ID}></FeedCard>

          <FeedCardSlider title='Op-ed' count='5' categories='1'></FeedCardSlider>

          {/* <PlayListSlider count="10"></PlayListSlider> */}

          <FeedCard title='Other news' count='5' categories={process.env.REACT_APP_TOP_STORIES_ID}></FeedCard>
          <br></br>
        </IonContent>
      </IonPage>
    );
  }
};

export default Home;
