import { IonCol, IonCard, IonGrid, IonRow, IonRouterLink } from '@ionic/react';
import React from 'react';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ReactTimeAgo from 'react-time-ago'
import Spinner from './Spinner';

const env = process.env;

TimeAgo.addLocale(en)

class FeedCard extends React.Component<any, any> {

    addCategories: string | undefined;

    constructor(props: object) {
        super(props);
        this.state = { loading: true, feedList: ''};
    }

    componentDidMount() {
        if (this.props.categories) {
            const catQ = '&categories=' + this.props.categories;
            this.addCategories = catQ;
        }

      fetch(`${env.REACT_APP_BASE_URL}/posts/?per_page=${this.props.count + this.addCategories}`, { mode: 'cors' })
            .then(response => response.json())
            .then(response => {
                if (response == '') {
                    const html = <p style={{ margin: 'auto' }}> No feed at the momemt</p>;
                    this.setState({ feedList: html, loading: false});
                } else {
                  const html = response.map(
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
                    this.setState({ feedList: html, loading: false });
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        if (this.state.loading) {
          return (
            <Spinner />
          )
        } else {
            return (
                <>
                    <h4 style={{ marginLeft: "1rem" }}>{this.props.title}</h4>
                    <IonGrid style={{ paddingTop: '0rem', marginTop: '0rem' }}>
                        <IonRow >{this.state.feedList}</IonRow></IonGrid >
                </>

            );
        }

    }

}

export default FeedCard;