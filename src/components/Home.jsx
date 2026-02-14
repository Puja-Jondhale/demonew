import React from "react";
import Slider from "react-slick";
import "./Home.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    title: "Micro Brewery for Turnkey Projects",
    features: [
      "Leading Microbrewery Equipment manufacturer and Supplier",
      "Microbrewery plants Range - 1 HL to 50 HL",
      "Top quality equipments",
      "Durable, heavy duty design"
    ],
    image: "/Images/micro.png"
  },
  {
    title: "Bio-Fermentation for Turnkey Projects",
    features: [
      "We manufacture and take care of all hygienic designs",
      "Capacity - 5 ltr to 200,000 ltr",
      "Material of Construction - SS 304, SS 316",
      "Fully Integrated Bioprocess suite"
    ],
    image: "/Images/bio.png"
  },
  {
    title: "Polyol Blending System For Turnkey Projects",
    features: [
      "Auto batch blending system for polyol and additives",
      "Control Cabinet with modern PLC and operator-friendly functions",
      "High accuracy weighing cells and flow meters",
      "Ultrasonic and magnetic level control system"
    ],
    image: "/Images/img3.png"
  },
  {
    title: "Process Equipment Manufactures",
    features: [
      "Cryogenic Reactor for Turnkey Projects",
      "Capacity - 250 ltr to 60,000 ltr",
      "Material of construction - SS304, SS316",
      "Max Design pressure - 25 Bar"
    ],
    image: "/Images/process.png"
  }
];


const Home = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false
  };

  return (
    <section className="home-section">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div className="slide-content">

              {/* LEFT CONTENT */}
              <div className="slide-text">
                <h2>{slide.title}</h2>
                <ul>
                  {slide.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* RIGHT IMAGE */}
              <div className="slide-image">
                <img src={slide.image} alt={slide.title} />
              </div>

            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Home;
