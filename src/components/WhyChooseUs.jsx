import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us" id="why-choose-us">
    <h2 className="why-title">Why Choose Us</h2>

      <div className="why-container">
        {/* LEFT IMAGE */}
        <div className="why-left">
          <img src="/Images/WhyChooseUs.png" alt="Why Choose Us" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="why-right">
          <ul>
            <li>
              <span className="icon">⚙️</span>
              <div className="text">
                <strong>High-Quality Products:</strong> We provide unique, high-quality process equipment and services worldwide.
              </div>
            </li>

            <li>
              <span className="icon">🛠</span>
              <div className="text">
                <strong>Low Running Costs:</strong> Energy-efficient solutions ensuring low operating costs.
              </div>
            </li>

            <li>
              <span className="icon">🚀</span>
              <div className="text">
                <strong>Reliable Service Backup:</strong> Continuous support for uninterrupted performance.
              </div>
            </li>

            <li>
              <span className="icon">⚡</span>
              <div className="text">
                <strong>Innovative Technology:</strong> Advanced solutions to achieve production targets.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
