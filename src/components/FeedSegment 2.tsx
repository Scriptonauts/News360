import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonRouterOutlet, IonSegment, IonSegmentButton, CreateAnimation } from '@ionic/react';
import ReactTransitionGroup from 'react-transition-group'

import './FeedSegment.css';
import ReactDOM from 'react-dom';
import FeedCard from './FeedCard';


let category = [
    {
        name: 'Education',
        image: 'https://www.ugaana.org/wp-content/uploads/2018/02/Legon4.png',
    },
    {
        name: 'Finance',
        image: 'https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2021/07/rupee-4395554_1280-e1626070973451.jpg',
    },
    {
        name: 'Politics',
        image: 'https://static.politico.com/dims4/default/c668351/2147483647/strip/true/crop/1160x773+0+0/resize/630x420!/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F1f%2F47%2F3d7eb66148da9abc5bb66f990a08%2F220310-joe-biden-ap-773.jpg',
    },
    {
        name: 'Asia',
        image: 'https://static.politico.com/dims4/default/c668351/2147483647/strip/true/crop/1160x773+0+0/resize/630x420!/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F1f%2F47%2F3d7eb66148da9abc5bb66f990a08%2F220310-joe-biden-ap-773.jpg',
    },
    {
        name: 'Europe',
        image: 'https://static.politico.com/dims4/default/c668351/2147483647/strip/true/crop/1160x773+0+0/resize/630x420!/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F1f%2F47%2F3d7eb66148da9abc5bb66f990a08%2F220310-joe-biden-ap-773.jpg',
    },
    {
        name: 'Africa',
        image: 'https://static.politico.com/dims4/default/c668351/2147483647/strip/true/crop/1160x773+0+0/resize/630x420!/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F1f%2F47%2F3d7eb66148da9abc5bb66f990a08%2F220310-joe-biden-ap-773.jpg',
    },
    {
        name: 'World',
        image: 'https://cdni.rt.com/files/2022.03/l/622f5e85203027453173103b.jpg',
    }
];

let segmentDataObject = {
    education: [
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
    ],
    finance: [
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
    ],
    conflict: [
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
    ],
    politics: [
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
    ],

}

// let fetchSegmentData = (segment_name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => {
//     return )
// }

class FeedSegment extends React.Component<any, any> {
    catIds = Array();
    constructor(props: any) {
        super(props);
        this.state = { segments: '' }
        this.state = ({ segment: '' })
    }

    componentDidMount() {
        const segments = JSON.parse(localStorage.getItem('categories')!).map(
            (cateItem: any) => {
                this.catIds.push(cateItem.id);
                return (
                    <IonSegmentButton key={cateItem.id} value={cateItem.id} onClick={this.props.segmentHandler}>
                        <IonLabel>{cateItem.name}</IonLabel>
                    </IonSegmentButton>
                )
            }
        );

        localStorage.setItem('category-ids', JSON.stringify(this.catIds))

        let buildSegment = (<IonSegment scrollable onIonChange={e => {
            let s: string = e.detail.value!;
            localStorage.setItem('feed-active-segment', s);
        }

        } color='success' value={this.catIds[0]} >

            {segments}
        </IonSegment>)

        this.setState({ segment: buildSegment })
    }



    render() {

        return (
            <>{this.state.segment}</>
        )
    }
};

export default FeedSegment;