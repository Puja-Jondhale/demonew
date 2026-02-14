import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";
import OurProjects from "./components/OurProjects";
import WhyChooseUs from "./components/WhyChooseUs";
import TheValuedCustomers from "./components/TheValuedCustomers";
import About from "./components/About";
import OurCertification from "./components/OurCertification";
import FacilitiesUnit1 from "./components/Facilities/Unit1";
import FacilitiesUnit2 from "./components/Facilities/Unit2";
import FacilitiesUnit3 from "./components/Facilities/Unit3";

//import VarshaNawale from "./components/VarshaNawale";
//import KishorNawale from "./components/KishorNawale";
//import SomnathNawale from "./components/SomnathNawale";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <AboutUs />
              <OurServices />
              <OurProjects />
              <WhyChooseUs />
              <TheValuedCustomers />
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/ourcertification" element={<OurCertification />} />

        <Route path="/facilities/unit1" element={<FacilitiesUnit1 />} />
        <Route path="/facilities/unit2" element={<FacilitiesUnit2 />} />
       <Route path="/facilities/unit3" element={<FacilitiesUnit3 />} />
     {/*   <Route path="/team/varsha-nawale" element={<VarshaNawale />} />
        <Route path="/team/kishor-nawale" element={<KishorNawale />} />
        <Route path="/team/somnath-nawale" element={<SomnathNawale />} />*/  }

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
