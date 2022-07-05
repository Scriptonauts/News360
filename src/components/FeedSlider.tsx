import React from 'react';
import { IonSlides, IonSlide, IonContent, IonSpinner, IonRouterLink } from '@ionic/react';
import Spinner from './Spinner';

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
    initialSlide: 0,
    speed: 400
};

class FeedSlider extends React.Component<any, any>{

    addCategories: any;
    slideList: any;
    slide: any;
    constructor(props: any) {
        super(props);
        this.state = { slideList: <Spinner />, addCategories: ''};
    }

    componentDidMount() {
        if (this.props.categories) {
            const catQ = '&categories=' + this.props.categories;
            this.addCategories = catQ;
        }

        fetch(`${process.env.REACT_APP_BASE_URL}/posts/?per_page=${this.props.count + this.addCategories}`, { mode: 'cors' })
            .then(response => response.json())
            .then(response => {
                const html = response.map(
                    (feedItem: any) =>
                    (
                        <IonSlide key={feedItem.id}>
                            <IonRouterLink routerLink={'/article?id=' + feedItem.id}>
                                <img src={feedItem.x_featured_media_large ? feedItem.x_featured_media_large : '/images/default.png'} alt={feedItem.title.rendered} />
                                <div className='bottom-left'>
                                    <h3 className='slider-title'>{feedItem.title.rendered}</h3>
                                </div>
                            </IonRouterLink>
                        </IonSlide>

                    )
                );

                this.setState({ slideList: html });

                const slide_ =
                    (
                        <IonSlides pager={true} options={slideOpts}>
                            {this.state.slideList}
                        </IonSlides>
                    );

                this.setState({ slide: slide_ });
            })
            .catch(err => {
                console.log(err);
            });
    }



    render(): React.ReactNode {
        return (
            <>{this.state.slide}</>
        )
    }
}


export default FeedSlider;