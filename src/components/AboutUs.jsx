import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutUs.css";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate("/about"); // 👈 open About page
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-image">
          <img src="/Images/About.png" alt="About Padmatech" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <h2>About Us</h2>

          <p>
            Established in 2005, Padmatech Industries is a premier EPC company
            specializing in turnkey equipment supply, process equipment
            manufacturing, and EPC projects for Chemical, Pharmaceutical,
            API, Bulk Drugs, Bio-Tech, Petrochemicals, Beverages,
            Refineries, Oil & Gas, and Foundry Chemicals.
          </p>

          <p>
            With over two decades of experience and more than 700 successful
            contracts, we deliver reliable, high-performance industrial
            solutions trusted nationwide.
          </p>

          <button className="read-more-btn" onClick={handleReadMore}>
            Read More →
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
