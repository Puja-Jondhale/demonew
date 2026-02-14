import React from "react";

import Slider from "react-slick";
import "./OurServices.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  { title: "Automation", image : "/Images/Automation.png" },
  { title: "Electrical Site Installation", image: "/Images/Electrical Site Installation.png" },
  { title: "Laser Cutting Services", image: "/Images/Laser cutting Services in pune.png" },
  { title: "Operation & Maintenance", image: "/Images/operation and maintenance.png" },
  { title: "Piping Engineering & 3D Modelling", image: "/Images/Piping Engineering design & 3D Modelling.png" },
  { title: "Engineering", image: "/Images/Engineering.png" },
  { title: "Erection & Commissioning Service", image: "/Images/Eraction and commiting service.png" }
];

const OurServices = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="services-section" id="services">
      <h2 className="services-title">Our Services</h2>

      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="service-slide">
            <div className="service-card">

              {/* IMAGE */}
              <img src={service.image} alt={service.title} />

              {/* CONTENT */}
              <div className="service-content">
                <button className="service-title-btn">
                  {service.title}
                </button>
                 
                <button className="read-more-btn">
                  Read More <span>→</span>
                </button>
              </div>

            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default OurServices;
