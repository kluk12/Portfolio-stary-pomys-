import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./slick.css";
import "./slick-theme.css";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      centerMode: true,
      // focusOnSelect: true,
      // rows: 1,
      centerPadding: 90,
      slidesToShow: 4,
      slidesToScroll: 2
    };
    return (
      <Slider {...settings}>
        <div>
          <img
            src="http://webdevnatalia.com/img/logos/react.png"
            alt="Tekst alternatywny"
          />
        </div>
        <div>
          <img
            src="http://webdevnatalia.com/img/logos/html.png"
            alt="Tekst alternatywny"
          />
        </div>
        <div>
          <img
            src="http://webdevnatalia.com/img/logos/css.png"
            alt="Tekst alternatywny"
          />
        </div>
        <div>
          <img
            src="http://webdevnatalia.com/img/logos/bootstrap.png"
            alt="Tekst alternatywny"
          />
        </div>
        <div>
          <img
            src="http://webdevnatalia.com/img/logos/redux.png"
            alt="Tekst alternatywny"
          />
        </div>
        <div>
          <img
            src="http://webdevnatalia.com/img/logos/js-logo.png"
            alt="Tekst alternatywny"
          />
        </div>
        <div>
          <img
            src="http://webdevnatalia.com/img/logos/sass.png"
            alt="Tekst alternatywny"
          />
        </div>
        <div>
          <img
            src="http://webdevnatalia.com/img/logos/jqueryn.png"
            alt="Tekst alternatywny"
          />
        </div>
      </Slider>
    );
  }
}
export default SimpleSlider;
