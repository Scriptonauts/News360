import React, { useEffect, useState } from 'react';
import { IonSlides, IonSlide, IonContent, IonCard } from '@ionic/react';
import { useSelector } from 'react-redux';
import SwitchFeedTabContent from '../actions/FeedTabContentAction';
import { useDispatch } from 'react-redux';


// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
    initialSlide: 0,
    speed: 500,
    slidesPerView: 2,
    autoplay: true
};

let FeedCategorySlider = (props: any) => {
    // constructor(props: any) {
    //     super(props);
    //     this.state = { catList: '' }
    // }

    const [catList, setCatList] = useState(<></>);
    const dispatch = useDispatch();

    useEffect(() => {

        fetch(`${process.env.REACT_APP_BASE_URL}/categories`, { mode: 'cors' })
            .then(response => response.json())
            .then(response => {
                let html = response.map(
                    (catItem: any) => (
                        <IonSlide key={catItem.id}>
                            <IonCard className='category-slider' style={{ backgroundImage: `url(${catItem.acf.hungry_image})`, backgroundSize: 'cover', }} routerLink={'/category/' + catItem.id + '/' + catItem.name}>
                                <div className='cat-bottom-left '><h5>{catItem.name.toUpperCase()}</h5></div>
                            </IonCard>
                        </IonSlide>
                    )
                );

                let slider = (<IonSlides pager={false} options={slideOpts} style={{ padding: '0.2rem' }}>
                    {html}
                </IonSlides>)

                setCatList(slider);
            })
            .catch(err => {
                console.log(err);
            });

    }, []);


    return (

        <>{catList}</>
    )


}




export default FeedCategorySlider;