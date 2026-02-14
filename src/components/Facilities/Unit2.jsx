import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Unit2.css"; // We'll create this CSS file

const Unit2 = () => {
  const sliderImages = [
    "/Images/PIC1.png",
    "/Images/PIC2.png",
    "/Images/PIC3.png",
    "/Images/PIC4.png",
    "/Images/PIC5.png",
    "/Images/PIC6.png",
  ];

  return (
    <div className="unit2-container">

      {/* Header Section */}
      <div className="header-section">
        <h1 className="unit-title">Unit II</h1>
        <img src="/Images/Unit2.png" alt="Unit 2"/>
        <p className="center-text">
          In Pune’s Bhosari Industrial region, the second unit plays a significant part in Padmatech Industries’ capability. This 12,000-square-foot unit is built for large manufacturing projects and complex operations, making it a critical hub for our production activities. Unit 2 of Padmatech Industries has state-of-the-art welding machinery to support work excellence. Our facility is designed to handle all our needs, from design to production and delivery. Our machinery and workforce produce products with adherence to safety standards. This unit is particularly focused on manufacturing material handling equipment, including products such as cryogenic reactors, high-pressure reactors, and heat exchangers.
        </p>
      </div>

      {/* Section 1 */}
     <div className="section">

       <div className="image-left">
        <img src="/Images/delivers Excellent engineering equipment.png" alt="Engineering Equipment"className="box-image"/>
        </div>
        <div className="text-right">
          <h2>Unit 2 delivers Excellent engineering equipment</h2>
          <p>
            Unit 2 delivers top-notch engineering and material-handling equipment. Our product range includes cryogenic reactors, 
            high-pressure reactors, roll compactors, bio-fermenters, heat exchangers, twin shaft mixers, high-speed mixers, and 
            process tanks. Each piece of equipment is manufactured to meet the highest available standards, guaranteeing 
            durability, efficiency, and reliability for our esteemed clients.
          </p>
          <p>
            Through advanced technology, a skilled workforce, and a commitment to quality, Unit 2 at Padmatech Industries
             exemplifies our dedication to innovation and excellence in the manufacturing sector.
          </p>
        </div>

      {/* Section 2 */}
      <div className="section">
        <div className="text-left">
          <h2>Our Workforce at Unit 2</h2>
          <p>
            This unit’s team is a dedicated team that plays an important role in the growth of our company. Unit 2’s production
             crew is ahead of production. We guarantee a smooth production process while meeting quality standards and delivery
              schedules. Unit 2’s purchasing team is responsible for sourcing high-quality materials and components. They play 
              an important role in maintaining the materials. The Quality assurance team inspect and test everything throughout
               the process. Their work makes sure that our services exceed customer requirements, stating their reputation for
                delivering good quality machines. The design team fulfils requirements and builds creative and practical solutions. They use their expertise in CAD and other design tools to create plans and specifications for mechanical products and equipment.
          </p>
        </div>
        <div className="image-right">
        <img src="/Images/OurWorkforceUnit2.png" alt="Our Workforce Unit 2" className="box-image"/>
        </div>
      </div>

      {/* Section 3 */}
      <div className="section">
         <div className="image-left">

        <img src="/Images/WeldingMachineUnit2.png" alt="Welding Machine Unit 2" className="box-image"/>
        </div>
         <div className="text-right">
          <h2>Welding Machine In Unit-2</h2>
          <p>
            Our welding functions are powered by top-quality machines which include 12 units of COSMOS Mogra, 4 units of WARP,
             and 1 unit of ADOR, all with 400 Amp and inverter-based technology. The COSMOS Mogra is known for its reliability
              and accuracy, providing good quality welds. WARP provides versatility and productivity to our production, while
               the ADOR is known for its durability and performance. These machines provide arc stability and accurate control,
                helping us to handle welding tasks with ease. The WARP welding units contribute to our capability to manufacture
                 different industrial products. The features of the ADOR welding machine include thermal management, which
                  guarantees longevity and stability during prolonged use. Together, these machines enhance our manufacturing
                   capabilities, allowing us to deliver superior stainless steel process equipment and material handling systems
                    with unmatched precision and consistency.
            </p>
         </div>
      </div>

      {/* Section 4 */}
      <div className="section">
        <div className="text-left">
          <h2>Our Strength</h2>
          <p>
            At Padmatech Industries, our greatest strength lies in our dedicated and skilled workforce. Our employees are the
             driving force behind our success, bringing their expertise, passion, and commitment to every project. They are not
              just workers but integral members of our Padmatech family, each contributing to our reputation for excellence in
               the process equipment manufacturing industry. Our workers’ ability to innovate, adapt to new technologies, and 
               maintain rigorous standards of quality and safety is what sets us apart in the industry. Our dedicated team of
                workers, combined with strong teamwork and team contributions, provides customers with high-quality products
                 and meets various industrial needs with excellence and reliability. The workers brings an abundance of
                  knowledge. They help us maintain productivity as well as make sure all the products meet our set standards.
                   They also ensure the timely acquisition of materials, and create a supportive work environment. All of them
                    drive Padmatech Industries forward and help us reach new levels of excellence.
          </p>
        </div>
        <div>
            <img src="/Images/OurStrength.png" alt="Our Strength" className="box-image-right"/>
         </div>
        </div>
      {/* Slider Section */}
      <div className="slider-container">
        <Slider
          dots={true}
          infinite={true}
          slidesToShow={3}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={2000}
          responsive={[
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
          ]}
        >
          {sliderImages.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Slider ${index + 1}`} className="box-image"/>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </div>
  );
};

export default Unit2;
