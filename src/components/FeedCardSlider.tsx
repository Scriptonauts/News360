import React from 'react';
import { IonSlides, IonSlide, IonContent, IonCol, IonItem, IonCard, IonCardContent, IonGrid, IonRow, IonAvatar, IonSpinner } from '@ionic/react';
import ReactTimeAgo from 'react-time-ago';

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
    autoplay: true

};



let feed = [
    {
        title: 'Self-driving truck makes delivery 10 hours faster than a human',
        image: 'https://cdn.cnn.com/cnnnext/dam/assets/210714095430-tusimple-truck-blue-exlarge-169.jpg',
        time: '1 minute ago',
        category: 'Tech'
    },
    {
        title: 'F1 star Schumacher says he will benefit after Mazepin exit ',
        image: 'https://cdni.rt.com/files/2022.03/l/622f4f1185f540545f063094.jpg',
        time: '1 minute ago',
        category: 'Sports'
    },
    {
        title: 'Instagram ban comes into effect in Russia',
        image: 'https://cdni.rt.com/files/2022.03/m/622f032e85f540304964b0be.jpg',
        time: '1 minute ago',
        category: 'Tech'
    },
    {
        title: 'Lorem ipsum dmet consectetur adipisicing',
        image: 'https://cdni.rt.com/files/2022.03/l/622f5e85203027453173103b.jpg',
        time: '1 minute ago',
        category: 'Economy'
    }
];


class FeedCardSlider extends React.Component<any, any> {
    addCategories: any;

    constructor(props: any) {
        super(props);
        this.state = { feedList: <IonSpinner name="dots" style={{ margin: '0px auto' }} /> }
        this.state = { addCategories: '' }
        this.state = { slider: '' }
    }

    componentDidMount() {
        if (this.props.categories) {
            let catQ = '&categories=' + this.props.categories;
            this.addCategories = catQ;
        }


        fetch('https://kwekubright.com/hungry_project/wp-json/wp/v2/posts/?per_page=' + this.props.count + this.addCategories, { mode: 'cors' })
            .then(response => response.json())
            .then(response => {
                const html = response.map(
                    (feedItem: any) =>
                    (
                        <IonSlide key={feedItem.id}>
                            <IonCol size='12' sizeSm='12' sizeMd='4' sizeLg='3'>
                                <IonCard className='ion-no-margin' routerLink="/article" style={{ boxShadow: 'unset', borderRadius: 0 }}>
                                    <IonGrid style={{ padding: 0 }}>
                                        <IonRow  >
                                            <IonCol size="4" sizeSm='5' sizeMd='5' sizeLg='5' style={{ padding: '0 5px 0 0' }}>
                                                <img src={feedItem.x_featured_media_medium} />
                                            </IonCol>
                                            <IonCol>
                                                <h4 className='feed-title' style={{ marginBottom: 0 }}>{feedItem.title.rendered}</h4>
                                                <ReactTimeAgo date={feedItem.date} locale="en-US" />
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                </IonCard>
                            </IonCol>
                        </IonSlide>
                    )
                );

                this.setState({ feedList: html });

                let slider =
                    <IonGrid style={{ paddingTop: '0rem', marginTop: '0rem' }}>
                        <IonRow ><IonSlides pager={true} options={slideOpts} style={{ padding: 0 }}>
                            {this.state.feedList}
                        </IonSlides></IonRow></IonGrid >
                    ;

                this.setState({ slider: slider });
            })
            .catch(err => {
                console.log(err);
            });
    }


    render() {


        return (
            <>
                <h4 style={{ marginLeft: '1rem' }}>{this.props.title}</h4>
                <>{this.state.slider}</>
            </>

        )
    }

}





export default FeedCardSlider;