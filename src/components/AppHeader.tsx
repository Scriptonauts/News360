import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from "@ionic/react"
import PropTypes from "prop-types"

const AppHeader = (props: any) => {

  return (
      <IonHeader style={{ backgroundColor: '#ad0000', color: '#ffffff' }}>
        <IonToolbar color='#33cc66'>
          {
            props.backButton ?
              <IonButtons slot="start">
                <IonBackButton defaultHref={"/home"} />
              </IonButtons>
            : null
          }
          <IonTitle>
            {props.categoryName !== '' ? props.categoryName + ' ' + props.title : props.title}
          </IonTitle>
        </IonToolbar>
          {props.segment !== '' ? props.segment : null}
      </IonHeader>
  )
}

AppHeader.propTypes = {
  title: PropTypes.string.isRequired
}
AppHeader.defaultProps = {
  backButton: false,
  segment: '',
  categoryName: ''
}

export default AppHeader;