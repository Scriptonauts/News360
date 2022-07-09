import { useEffect, useState } from "react";
import { IonSlides, IonSlide, IonCard } from "@ionic/react";

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 500,
  slidesPerView: 2,
  autoplay: true,
};

const FeedCategorySlider = (props: any) => {
  const [catList, setCatList] = useState(<></>);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/categories`, { mode: "cors" })
      .then((response) => response.json())
      .then((response) => {
        const html = response.map((catItem: any) => (
          <IonSlide key={catItem.id}>
            <IonCard
              className="category-slider"
              style={{
                backgroundImage: `url(${catItem.acf.hungry_image})`,
                backgroundSize: "cover",
              }}
              routerLink={"/category/" + catItem.id + "/" + catItem.name}
            >
              <div className="cat-bottom-left ">
                <h5>{catItem.name.toUpperCase()}</h5>
              </div>
            </IonCard>
          </IonSlide>
        ));

        const slider = (
          <IonSlides
            pager={false}
            options={slideOpts}
            style={{ padding: "0.2rem" }}
          >
            {html}
          </IonSlides>
        );

        setCatList(slider);
      })
      .catch((err) => {
        // Error handling
      });
  }, []);

  return <>{catList}</>;
};

export default FeedCategorySlider;
