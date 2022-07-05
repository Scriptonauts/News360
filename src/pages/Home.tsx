import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { ReactNode } from 'react';
import FeedCard from '../components/FeedCard';
import FeedCardSlider from '../components/FeedCardSlider';
import FeedCategoryMason from '../components/FeedCategoryMason';
import FeedCategorySlider from '../components/FeedCategorySlider';
import FeedSlider from '../components/FeedSlider';
import './Home.css';

class Home extends React.Component<any, any>{
  categories: any = [];
  constructor(props: any) {
    super(props);
    this.state = { catList: '' }
  }

  componentDidMount() {
    //Lets fetch all categories
    fetch(process.env.REACT_APP_BASE_URL + '/categories?per_page=13', { mode: 'cors' })
      .then(response => response.json())
      .then(response => {

        localStorage.setItem('categories', JSON.stringify(response));

        const html = response.map(
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
          <FeedCategoryMason ></FeedCategoryMason>
        </IonContent>
      </IonPage>
    );
  }
}

export default Home;
