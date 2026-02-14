import React from "react";
import Slider from "react-slick";
import "./Unit1.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Unit1 = () => {
  const images = [
    "/Images/IMG1.png",
    "/Images/IMG2.png",
    "/Images/IMG3.png",
    "/Images/IMG4.png",
    "/Images/IMG5.png",
    "/Images/IMG6.png",
    "/Images/IMG7.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
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
    <div className="unit-container">

      {/* SECTION 1 */}
      <h1 className="unit-heading">Unit I</h1>

      <div className="section">
        <div className="image-left">
          <img src="/Images/Unitl.png" alt="Unit I" />
        </div>
        <div className="text-right">
          <p>
            Unit I of Padmatech Industries is a place of innovation, specializing in the designing and manufacturing high-quality
             equipment. This facility is located at Plot No. 219, Sector No. 10, PCNTDA, MIDC, Bhosari, Pune. Spanning 
             5,500 square feet with a shed height of 12 meters, Unit I is meticulously designed to accommodate advanced machinery
              and facilitate efficient workflows. The unit’s strategic location in Bhosari, a renowned industrial hub, provides
               excellent connectivity and access to a skilled labor pool, enhancing our operational capabilities. With a 
               dedicated power supply of 67 H.P., Unit I is fully equipped to handle complex industrial applications, guaranteeing
                that we meet the rigorous standards of our customers across different sectors.
          </p>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="section">
        <div className="text-left">
          <h2>Our Expertise</h2>
          <p>
            Padmatech Industries is a leader in the Engineering Supply, Manufacturing & Service Provider Company for Chemical, 
            Pharma, Food, Oil & Gas, Distillery, Textile, Paper & Pulp, Paint, Brewery, Polymer, and all types of bulk handling
             applications.
          </p>
          <p>
            Located in Pune’s Bhosari Industrial region, our state-of-the-art facilities are equipped with advanced machinery and
             cutting-edge technology. Our dedicated teams specialize in producing a diverse range of products, including stainless
              steel process equipment, material handling systems, and high-precision reactors. Committed to innovation, 
              sustainability, and excellence, Padmatech Industries consistently delivers superior products and services, meeting
               the rigorous standards of various industries.
          </p>
        </div>
        <div className="image-right">
          <img src="/Images/OurExpertise.png" alt="Our Expertise" />
        </div>
        
      </div>

      {/* SECTION 3 */}
      <div className="section reverse">
        <div className="text-left">
          <h2>Laser Cutting Machine In Unit -1</h2>
          <p>
            Unit I of Padmatech Industries is pivotal in providing state-of-the-art laser cutting services, a cornerstone of our
             advanced manufacturing capabilities. Equipped with high-precision laser cutting machinery, this unit delivers
              exceptional accuracy and efficiency in cutting various materials.
          </p>
        </div>
        <div className="image-right">
          <img src="/Images/Laser Cutting Machine.png" alt="Laser Cutting Machine" />
        </div>
      </div>

      {/* SECTION 4 */}
      <div className="section">
        <div className="text-left">
          <h2>Our Workforce Unit -1</h2>
          <p>
            At Padmatech, our most important asset is our skilled team. Comprising a diverse group of professionals, our staff 
            brings together experience, expertise, and a shared commitment to their work.
          </p>
        </div>
        <div className="image-right">
          <img src="/Images/OurWorkforce.png" alt="Our Workforce" />
        </div>
        
      </div>

      {/* SECTION 5 */}
      <div className="section reverse">
        <div className="text-left">
          <p>
            Supporting our technical teams is our administrative and management staff. They ensure that our operations run
             smoothly and efficiently.
          </p>
        </div>
        <div className="image-right">
          <img src="/Images/OurWorkForce1.png" alt="Workforce Team" />
        </div>
      </div>

      {/* CENTER PARAGRAPH */}
      <div className="center-text">
        <p>
          With a deep understanding of industry trends and customer needs, they develop strategic marketing campaigns that
           highlight the unique value propositions of our products and services. Through their proactive approach and unwavering
            commitment to excellence, the sales, marketing, and proposal team plays a crucial role in expanding our market
             presence and securing new business opportunities.
        </p>
      </div>
      {/* IMAGE SLIDER */}
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="slider-box">
              <img src={img} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Unit1;
