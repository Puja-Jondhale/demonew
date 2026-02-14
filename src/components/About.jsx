import React, { useState } from "react";

import "./About.css";

const About = () => {
 const [activeTab, setActiveTab] = useState("vision");

  return (
    <div className="about-page-container">

      {/* Header Section */}
      <section className="about-hero row">
        <div className="about-text">
          <h1>About Us</h1>
          <p>Engineering Excellence Since 2005</p>
        </div>
        <div className="about-image">
          <img src="/Images/About.png" alt="About Padmatech" />
        </div>
      </section>

      {/* Company Overview */}
      <section className="about-section row light-bg">
        
        <div className="about-text">
          <h2>About Padmatech Industries</h2>
          <p>
            Established in 2005, Padmatech Industries is a premier EPC company
            specializing in turnkey equipment supply, process equipment
            manufacturing, and EPC projects for industries such as chemicals,
            pharmaceuticals, APIs, bulk drugs, biotech, petrochemicals, beverages,
            refineries, oil and gas, and foundry chemicals. Our experience spans
            two decades and over 700 contracts. Our product range has been developed
            to meet the diverse needs of various industries, resulting in a significant
            response from clients across the nation.
          </p>
          <p>
            Padmatech Industries Pvt. Ltd. has 20 years of extensive experience in
            the field of process equipment manufacturing. We offer a wide range of
            industrial processing equipment, chemical processing equipment, heating
            and cooling systems, powder granulation equipment, liquid and powder
            mixing equipment, blenders, fermenters, special-purpose machines, and
            material handling systems. Our qualified team, driven by a vision to
            deliver the best industry solutions, ensures optimized results. At Padmatech
            Industries Pvt. Ltd., we deliver best-in-class industrial-quality designs
            and energy-efficient solutions.
          </p>
          <p>
            At Padmatech Industries, our focus on innovation drives every aspect of our
            operations, ensuring that our superior products deliver a memorable
            experience to our clients. With a strong history of design expertise and
            commitment to customer satisfaction, we have established ourselves as
            industry leaders.
          </p>
          <p>
            Our services are carried out in several state-of-the-art facilities,
            each equipped with the latest technology and staffed by a team of skilled
            professionals. We take pride in our law-abiding practices, ensuring all
            operations adhere to legal and regulatory standards. This integrity forms
            the bedrock of our company, guaranteeing reliable and compliant products.
          </p>
        </div>
      </section>

      {/* Customer Support */}
      <section className="about-section row">
        <div className="about-text">
          <h2>Providing Reliable Support for Every Project</h2>
          <p>
            We place our customer service above everything else. Our ability to provide
            optimized solutions tailored to the unique needs of our clients is a testament
            to our dedication to excellence. From the initiation of the process, we
            guarantee top-notch execution and results. We under-promise and over-deliver,
            always striving to exceed client expectations and build long-term loyalty.
          </p>
        </div>
        
      </section>

      {/* Innovation & Industrial Advancement */}
      <section className="about-section row light-bg">
        
        <div className="about-text">
          <h2>Continuous Innovation for Industrial Advancement</h2>
          <p>
            Innovation is embedded in our DNA. We invest heavily in research and development
            to stay ahead of industry trends and offer cutting-edge solutions to our customers.
            This commitment enhances our service offerings and positions us as a leading
            innovator in the global market. Our dedication to sustainability and efficiency
            is reflected in our services, which aim to reduce environmental impact and lower
            our customers’ operating costs.
          </p>
        </div>
      </section>

      {/* Workforce & Integrity */}
      <section className="about-section row">
        <div className="about-text">
          <h2>Our Talented Workforce with Integrity</h2>
          <p>
            We focus on improving the skills of our employees through continuous training and
            development programs, empowering our team to achieve full potential and drive
            innovation and excellence. Our staff’s honesty and integrity ensure every project
            is executed with the utmost professionalism and transparency.
          </p>
        </div>
       
      </section>

      {/* Availability */}
      <section className="about-section row light-bg">
       
        <div className="about-text">
          <h2>Always Ready and Available For You</h2>
          <p>
            With an impressive 98% uptime across all our facilities, we ensure reliable
            and consistent performance, reducing downtime and increasing productivity.
            This is a key factor in our reputation as a trusted partner.
          </p>
        </div>
      </section>

      {/* Trusted Partner */}
      <section className="about-section row">
        <div className="about-text">
          <h2>Your Trusted Partner for Growth</h2>
          <p>
            At Padmatech Industries, we are more than just a manufacturing company – we
            are your reliable partner for growth and success. Our devotion to honesty,
            integrity, and exceptional customer service sets us apart. Join us as we
            shape the future of industrial engineering solutions with passion, precision,
            innovation, and unwavering commitment. Together, we can achieve remarkable
            results and drive progress in the industrial sector.
          </p>
        </div>
      </section>
      
      {/* Vision / Mission / Core Values Section */}
      <section className="about-section row light-bg">
        <h2>Our Company Highlights</h2>

        {/* Buttons */}
        <div className="tab-buttons">
          <button
            className={activeTab === "vision" ? "active" : ""}
            onClick={() => setActiveTab("vision")}
          >
            Our Vision
          </button>
          <button
            className={activeTab === "mission" ? "active" : ""}
            onClick={() => setActiveTab("mission")}
          >
            Our Mission
          </button>
          <button
            className={activeTab === "values" ? "active" : ""}
            onClick={() => setActiveTab("values")}
          >
            Core Values
          </button>
        </div>

        {/* Content Box */}
        <div className="tab-content">
          {activeTab === "vision" && (
            <div className="content-box">
              <h3>Our Vision</h3>
              <p>
                To be the most successful company in the world to provide energy-efficient
                and environment-friendly solutions that help the environment go green.
              </p>
            </div>
          )}
          {activeTab === "mission" && (
            <div className="content-box">
              <h3>Our Mission</h3>
              <p>
                To provide innovative turnkey solutions for EPC projects and process equipment
                with commitment to advance technology and on-time delivery with best quality.
              </p>
            </div>
          )}
          {activeTab === "values" && (
            <div className="content-box">
              <h3>Core Values</h3>
              <img
                src="/Images/CoreValues.png"
                alt="Core Values"
                style={{ width: "500Px" ,height:"500px"}}
              />
            </div>
          )}
        </div>
      </section>
      {/* Why Choose Padmatech Industries */}
        <section className="about-section row light-bg">
          <h2 className="section-title">Why Choose Padmatech Industries</h2>

          <div className="why-choose-grid">
            {/* Box 1 */}
            <div className="why-box">
              <img src="/Icons/ReInvient.png" alt="Reinvent Your Career" />
              <h3>Reinvent Your Career</h3>
              <p>
                Re-imagine your future with a leader in turnkey solutions. We invest in
                your growth to sharpen talent and shape long-term success.
              </p>
            </div>

            {/* Box 2 */}
            <div className="why-box">
              <img src="/Icons/Innovative.png" alt="Innovative Technology" />
              <h3>Innovative Technology</h3>
              <p>
                Innovation drives us. Continuous improvement and customer-focused
                thinking help us deliver technology that lasts for years.
              </p>
            </div>

            {/* Box 3 */}
            <div className="why-box">
              <img src="/Icons/Optimized.png" alt="Optimized Solutions" />
              <h3>Optimized Solutions</h3>
              <p>
                We carefully listen to customer needs and deliver efficient, optimized
                solutions that maximize productivity and resource utilization.
              </p>
            </div>

            {/* Box 4 */}
            <div className="why-box">
              <img
                src="/Icons/LowRunningAndMaintenance.png"
                alt="Low Running & Maintenance Cost"
              />
              <h3>Low Running & Maintenance Cost</h3>
              <p>
                Our products are energy-efficient and built using world-class
                technologies, ensuring minimal running and maintenance costs.
              </p>
            </div>

            {/* Box 5 */}
            <div className="why-box">
              <img src="/Icons/Durability.png" alt="Durability" />
              <h3>Durability</h3>
              <p>
                Designed for long life and consistent performance, our products ensure
                the best balance between investment and returns.
              </p>
            </div>

            {/* Box 6 */}
            <div className="why-box">
              <img src="/Icons/LessPayBack.png" alt="Less Pay Back Period" />
              <h3>Less Pay Back Period</h3>
              <p>
                Manufactured to international quality standards, our solutions ensure a
                faster return on investment.
              </p>
            </div>
          </div>
        </section>

    </div>
  );
};

export default About;
