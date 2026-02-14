import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Unit3.css";

const Unit3 = () => {

  const sliderImages = [
    "/Images/Unit-III-1.png",
    "/Images/Unit-lll-2.jpg",
    "/Images/Unit-lll-3.png",
    "/Images/Unit-lll-4.png",
    "/Images/Unit-lll-5.jpg",
  ];

  return (
    <div className="unit3-container">

      {/* Header Section */}
      <div className="unit3-header">
        <h1>Unit III</h1>
        <p>
          Unit III is located at Newasa Industrial area, Ahemadnager and is the flagship of Padmatech Industries. This 80,000-square-foot unit is dedicated to high-volume production and innovative design solutions. The 12-meter height is ideal for the placement of extensive production lines and advanced industrial equipment. Powered by a significant 100 HP power supply, Unit III is equipped to handle large production volumes with remarkable efficiency. The large plot area allows different production processes to be combined under one roof, which promotes synergy and unity of operations. This huge space facilitates the seamless integration of various manufacturing stages, from raw material processing to the final product, increasing efficiency and reducing production time.
        </p>
      </div>

      {/* Section 1 */}
      <div className="section">
        <div className="image-left">
            <img src="/Images/About.png" alt="About Unit 3" className="box-image" />
        </div>    
        <div className="text-right">
          <p>
            In Unit III, we direct our focus on developing major projects that require huge production capacity and complex planning. This facility is an innovation centre where we develop new manufacturing techniques, guaranteeing that Padmatech Industries remains at the forefront of industrial technology. Our engineers and technicians work on refining processes, adopting the latest advancements in industrial automation and robotics to improve precision and productivity. The facility at Newasa provides smooth manufacturing and timely delivery of products, supported by our state-of-the-art logistics and supply chain management systems that ensure prompt and reliable distribution to our clients.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="section">
            <div className="text-left">
                <h2>Advanced EPC Project Manufacturing in Unit-3</h2>
                    <p>
                        At Unit 3, we specialize in EPC (Engineering, Procurement, and Construction) projects and manufacturing stainless steel process equipment. Our capabilities include MEE (Multiple Effect Evaporation) plants, ZLDS (Zero Liquid Discharge Systems) plants, bio-tech, and skid-mounted systems. These require accuracy, expertise, and advanced technology, all of which are available at Unit 3.
                     </p>
             </div>
        <div>
        <div className="image-right">
            <img src="/Unit3EPC Project Manufacturing.jpg" alt="EPC Manufacturing" className="box-image" />
        </div>
      </div>

      {/* Section 3 */}
      <div className="section">
         <div className="image-left">

            <img src="/Images/Precision Welding.png" alt="Precision Welding" className="box-image" />
        </div>
        <div className="text-right">
          <h2>Precision Welding</h2>
          <p>
            To support our manufacturing processes, we have installed a 15-ton overhead crane, Sr. No. 1239, manufactured by Endurance, with a span of 23 meters and a bay length of 53 meters. This crane allows us to handle heavy components with ease and ensures the smooth flow of materials across the facility. Our welding capabilities are bolstered by six 400 Amp welding machines, all equipped with TIG torches, manufactured by Memco. These machines are essential for high-precision welding tasks required in our projects.
          </p>
        </div>
      </div>

      {/* Section 4 */}
      <div className="section ">
        <div className="text-left">
          <h2>Cutting-Edge Machinery</h2>
          <p>
            In addition to welding machines, Unit 3 is equipped with a variety of tools and machinery that enhance our production capabilities. We have a rolling machine for shaping and forming metal, a 7” angle grinder by DEWOLT for cutting and grinding tasks, and a 7” sander by KPT for surface finishing. Our facility also includes 15 units of 4” angle grinders, 5 polishing trolleys for achieving high-quality finishes, and 4 hydraulic pumps for various hydraulic applications. Furthermore, we have a state-of-the-art CNC plasma machine, which allows us to perform precise cutting tasks with high efficiency.
          </p>
        </div>
        <div className="image-right">
        <img src="/Images/Cutting-Edge Machinery.png" alt="Cutting Edge Machinery" className="box-image" />
        </div>
      </div>

      {/* Section 5 Center Text */}
      <div className="center-section">
        <h2>Commitment to Excellence</h2>
        <p>
          Unit 3 of Padmatech Industries is a powerhouse of production and innovation. With advanced equipment, a spacious layout, and a focus on sustainability, this unit exemplifies our dedication to excellence in manufacturing. The combination of cutting-edge technology and expert craftsmanship ensures that we continue to meet and exceed the expectations of our clients across various sectors.
        </p>
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
  );
};

export default Unit3;
