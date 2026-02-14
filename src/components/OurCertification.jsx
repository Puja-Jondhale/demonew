import React from "react";
import "./OurCertification.css";

const OurCertification = () => {
  return (
    <section id="OurCertification">
      <div className="cert-container">
        {/* Top Section - Main Certificate Heading */}
        <h1 className="cert-main-title">Our Certifications & Awards</h1>

        {/* Text Section */}
        <div className="cert-text">
          <h3>Certifications</h3>
          <p>
            We, Padmatech Industries Pvt Ltd, are known in the market for our dedication to quality and upholding its virtues.
            This entitles us to lionize our certifications and awards, which speak the story of our success in our business sphere.
            We are a certified ISO 9001:2015, DIN EN ISO 3834-2 PED approved, ASME U-Stamp, ISO 14001:2015 and ISO 45001:2018 company,
            which portrays our commitment to providing only quality materials.
          </p>
          <p>
            Not only this, but Padmatech Industries Pvt Ltd has also been awarded the 2015 certifications, including DIN EN ISO 3834-2 PED approval,
            ASME U-Stamp, ISO 14001:2015 and ISO 45001:2018, which we have received for our immense contribution to the field of industrial and chemical equipment.
            These certifications are not just merely our achievement, but rather a token of appreciation for all the hard work that has been put forward by employees.
          </p>
          <p>
            Padmatech Industries Pvt Ltd not only merely provides the goods and services to our clients, but we also provide extra services as per the requirements of each client,
            fostering strong relationships and trust. Hence, our ISO 9001:2015 certification is a testament to our commitment to excellence and client satisfaction.
          </p>
        </div>

        {/* Bottom Section - Grid of Certificate Images */}
        <div className="cert-image-grid">
          <div className="cert-box"><img src="/Images/certificate1.jpg" alt="Certificate 1" /></div>
          <div className="cert-box"><img src="/Images/certificate2.jpg" alt="Certificate 2" /></div>
          <div className="cert-box"><img src="/Images/certificate3.jpg" alt="Certificate 3" /></div>
          <div className="cert-box"><img src="/Images/certificate4.jpg" alt="Certificate 4" /></div>
          <div className="cert-box"><img src="/Images/certificate5.jpg" alt="Certificate 5" /></div>
          <div className="cert-box"><img src="/Images/certificate6.jpg" alt="Certificate 6" /></div>
        </div>
      </div>

      <div className="award-text">
        <h1 className="award-main-title">Awards</h1>
          <h3>Best Quality Product Company for the Year 2021</h3>
          <p>
            Apart from our certifications, Padmatech Industries Pvt Ltd has also been awarded the award of 
            “Best Quality Product Company for the year 2021” by Summentor Pro, supported by MSMS-India. 
            Alongside, another achievement of ours that we proudly boast is our recognition as 
            “Best Quality Product Company of the Year in Process Equipment Manufacturing for Chemicals 
            and Pharmaceuticals.” This was awarded to us by the Hon’ble Minister of State for Micro, Small 
            and Medium Enterprises (MSME), Government of India, Shri Pratap Chandra Sarangi. 
            This award highlights our excellence and commitment to providing high-level industrial solutions.
          </p>
        </div>

        {/* Bottom Section - Award Images */}
       <div className="award-image-grid">
          <div className="award-box">
            <img src="/Images/MSME-Award.png" alt="MSME Award" />
          </div>
          <div className="award-box">
            <img src="/Images/News-paper.png" alt="News Paper" />
          </div>
        </div>
      <div className="award-text">
          <p>
                   Similarly, we were also awarded the “ Special Effort Award” in the years 2020 and 2021 by the crowd, 
            acknowledging our efforts towards striving towards perfection in keeping the customers satisfied.
             These awards and recognitions speak and highlight the fact that Padmatech Industries Pvt Ltd only strives towards
              success and establishes new standards in the industry by constantly raising our standards as per the ever-changing
               requirements of the industry.
          </p>
          <img src="/Images/Award.png" alt="Award"/>
        </div>

    </section>
  );
};

export default OurCertification;
