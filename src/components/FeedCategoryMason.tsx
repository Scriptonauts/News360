import React from 'react';
import {IonCol, IonCard, IonGrid, IonRow} from '@ionic/react';

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 400,
  slidesPerView: 1,
  autoplay: true,

};

const category = [
  {
    name: 'Sports',
    image: 'https://www.sporf.com/wp-content/uploads/2022/01/910a6a94-gettyimages-460331526-768x536.jpg',
  },
  {
    name: 'Entertainment',
    image: 'https://www.theo2.co.uk/assets/img/shatta-wale-950x440-89dbf2863f.jpg',
  },
  {
    name: 'Food',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpZB0_3qGRT0vx7Jlw662goIgQc9en4esg&usqp=CAU',
  },
  {
    name: 'Conflict',
    image: 'https://cdni.rt.com/files/2022.03/l/622f5e85203027453173103b.jpg',
  },
];

class FeedCategoryMason extends React.Component {
  render() {
    return (

      <IonGrid style={{ padding: 0 }}>
        <IonRow style={{ padding: 0 }}>
          <IonCol size="6" style={{}}>
            <IonCard style={{ padding: 0, boxShadow: 'none', marginRight: 0 }}>
              <div className="category-mason" style={{ backgroundImage: `url(${category[0].image})`, backgroundSize: 'cover', height: '12.7rem' }}>
                <div className="cat-bottom-left " style={{ width: '100%' }}><h5>{category[0].name}</h5></div>
              </div>
            </IonCard>
          </IonCol>
          <IonCol size="6">
            <IonCard style={{ padding: 0, boxShadow: 'none', marginLeft: 0 }}>
              <div className="category-mason" style={{ backgroundImage: `url(${category[1].image})`, backgroundSize: 'cover', height: '6rem' }}>
                <div className="cat-bottom-left " style={{ width: '100%' }}><h5>{category[1].name}</h5></div>
              </div>
            </IonCard>
            <IonCard style={{ padding: 0, boxShadow: 'none', marginLeft: 0 }}>
              <div className="category-mason" style={{ backgroundImage: `url(${category[2].image})`, backgroundSize: 'cover', height: '6rem' }}>
                <div className="cat-bottom-left " style={{ width: '100%' }}><h5>{category[2].name}</h5></div>
              </div>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>

    );
  }
}

export default FeedCategoryMason;
