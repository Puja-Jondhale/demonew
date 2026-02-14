import React from "react";
import Slider from "react-slick";
import "./TheValuedCustomers.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const topCustomers = [
  "/Images/1.png",
  "/Images/3.png",
  "/Images/acg.png",
  "/Images/arca.png",
  "/Images/atlantic.png",
  "/Images/barc.png",
  "/Images/clean.png",
  "/images/EH.png",
  "/images/eternis.png",
  "/images/Ethentic.png",
];

const bottomCustomers = [
  "/images/garware.png",
  "/images/godrej.png",
  "/images/jubilant.png",
  "/images/lacpro.png",
  "/images/lear.png",
  "/images/Npcl.png",
  "/images/pi.png",
  "/images/pidlight.png",
  "/images/prayotek.png",
  "/images/s.png",
  "/images/saivishwa.png",
  "/images/serra.png",
  "/images/srf.png",
];

const TheValuedCustomers = () => {
  const topSettings = {
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    arrows: false,
    dots: false,
  };

  const bottomSettings = {
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    arrows: false,
    dots: false,
    rtl: true, // RIGHT ➜ LEFT
  };

  return (
    <section className="valued-customers">
      <h2 className="customers-title">Our Valued Customers</h2>

      <Slider {...topSettings} className="customer-slider">
        {topCustomers.map((img, i) => (
          <div key={i} className="customer-logo">
            <img src={img} alt="Customer" />
          </div>
        ))}
      </Slider>

      <Slider {...bottomSettings} className="customer-slider">
        {bottomCustomers.map((img, i) => (
          <div key={i} className="customer-logo">
            <img src={img} alt="Customer" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TheValuedCustomers;
