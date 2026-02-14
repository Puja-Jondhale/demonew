import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-left">
          <img src="/Icons/Padmatech.png" alt="Padmatech Logo" className="logo-img" />
        </div>

        <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li className="dropdown">
              <span>About Us</span>

              <ul className="dropdown-menu">
                <li>
                  <Link to="/about">About</Link>
                </li>

                <li>
                  <Link to="/ourcertification">
                    Our Certification & Awards
                  </Link>
                </li>

                {/* Facilities Submenu */}
                <li className="submenu">
                  <span>Facilities ▸</span>
                  <ul className="submenu-menu">
                    <li><Link to="/facilities/unit1">Unit I</Link></li>
                    <li><Link to="/facilities/unit2">Unit II</Link></li>
                    <li><Link to="/facilities/unit3">Unit III</Link></li>
                  </ul>
                </li>

                {/* Meet Our Team Submenu */}
                <li className="submenu">
                  <span>Meet Our Team ▸</span>
                  <ul className="submenu-menu">
                    <li><Link to="/team/varsha-nawale">Varsha Nawale</Link></li>
                    <li><Link to="/team/kishor-nawale">Kishor Nawale</Link></li>
                    <li><Link to="/team/somnath-nawale">Somnath Nawale</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
          {/* Products Dropdown */}
          <li className="dropdown">
            <span>Products</span>

            <ul className="dropdown-menu">

              {/* Chemical Processing Equipment */}
              <li className="submenu">
                <span>Chemical Processing Equipment ▸</span>
                <ul className="submenu-menu">
                  <li><Link to="/products/cryogenic-reactor">Cryogenic Reactor</Link></li>
                  <li><Link to="/products/high-pressure-reactor">High Pressure Reactor</Link></li>
                  <li><Link to="/products/stainless-steel-reactor">Stainless Steel Reactor</Link></li>
                  <li><Link to="/products/chemical-storage-tank">Chemical Storage Tank</Link></li>
                  <li><Link to="/products/condenser">Condenser Manufacturer In India</Link></li>
                  <li><Link to="/products/distillation-column">Distillation Column</Link></li>
                  <li><Link to="/products/chemical-receiver-tank">Chemical Receiver Tank</Link></li>
                  <li><Link to="/products/centrifuge">Centrifuge</Link></li>
                  <li><Link to="/products/atmospheric-tray-dryer">Atmospheric Tray Dryer</Link></li>
                  <li><Link to="/products/vacuum-tray-dryer">Vacuum Tray Dryer</Link></li>
                </ul>
              </li>

              {/* Material Handling Equipment */}
              <li className="submenu">
                <span>Material Handling Equipment ▸</span>
                <ul className="submenu-menu">
                  <li><Link to="/products/belt-conveyor">Belt Conveyor Manufacturers</Link></li>
                  <li><Link to="/products/screw-conveyor">Screw Conveyor</Link></li>
                  <li><Link to="/products/elevator">Elevator</Link></li>
                  <li><Link to="/products/rigid-silos">Rigid Silos</Link></li>
                </ul>
              </li>

              {/* Heating and Cooling System */}
              <li className="submenu">
                <span>Heating And Cooling System ▸</span>
                <ul className="submenu-menu">
                  <li><Link to="/products/heat-exchanger">Heat Exchange Manufacturer</Link></li>
                  <li><Link to="/products/hot-air-oven">Hot Air Oven</Link></li>
                  <li><Link to="/products/quench-tank">Quench Tank</Link></li>
                  <li><Link to="/products/steam-radiators">Steam Radiators</Link></li>
                </ul>
              </li>

              {/* Power Granulation Equipment */}
              <li className="submenu">
                <span>Power Granulation Equipment ▸</span>
                <ul className="submenu-menu">
                  <li><Link to="/products/roll-compactor-machine">Roll Compactor Machine</Link></li>
                  <li><Link to="/products/granulator-machine">Granulator Machine</Link></li>
                </ul>
              </li>

              {/* Liquid & Powder Mixing Equipment */}
              <li className="submenu">
                <span>Liquid, Powder Mixing Equipment ▸</span>
                <ul className="submenu-menu">
                  <li><Link to="/products/high-speed-mixer">High Speed Mixer</Link></li>
                  <li><Link to="/products/nauta-dryer">Nauta Dryer</Link></li>
                  <li><Link to="/products/bottom-side-entry-mixer">Bottom Side Entry Mixer</Link></li>
                  <li><Link to="/products/single-shaft-mixer">Single Shaft Mixer</Link></li>
                  <li><Link to="/products/twin-shaft-mixer">Twin Shaft Mixer</Link></li>
                  <li><Link to="/products/pbt-mixer">PBT Mixer</Link></li>
                </ul>
              </li>

              {/* Blender */}
              <li className="submenu">
                <span>Blender ▸</span>
                <ul className="submenu-menu">
                  <li><Link to="/products/ribbon-blender-machine">Ribbon Blender Machine</Link></li>
                  <li><Link to="/products/double-cone-blender">Double Cone Blender</Link></li>
                  <li><Link to="/products/paddle-blenders">Paddle Blenders</Link></li>
                </ul>
              </li>

              {/* Fermenter */}
              <li>
                <Link to="/products/fermenter-manufacturer">
                  Fermenter Manufacturer In India
                </Link>
              </li>

              {/* Special Purpose Machine */}
              <li>
                <Link to="/products/special-purpose-machine">
                  Special Purpose Machine
                </Link>
              </li>

            </ul>
          </li>
          {/* EPC Projects Dropdown */}
          <li className="dropdown">
            <span>EPC Projects</span>

            <ul className="dropdown-menu">
              <li>
                <Link to="/epc/epc-plant">EPC Plant</Link>
              </li>

              <li>
                <Link to="/epc/distillery-brewery-winery-plant">
                  Distillery / Brewery / Winery Plant
                </Link>
              </li>

              <li>
                <Link to="/epc/microbrewery-plant">
                  Microbrewery Plant
                </Link>
              </li>

              <li>
                <Link to="/epc/meet-plant">
                  MEET Plant
                </Link>
              </li>

              <li>
                <Link to="/epc/material-handling-system">
                  Material Handling System
                </Link>
              </li>

              <li>
                <Link to="/epc/powder-granulation-solutions">
                  Powder Granulation Solutions
                </Link>
              </li>
            </ul>
          </li>
          {/* Services Dropdown */}
          <li className="dropdown">
            <span>Services</span>

            <ul className="dropdown-menu">
              <li>
                <Link to="/services/laser-cutting-services-in-pune">
                  Laser Cutting Services In Pune
                </Link>
              </li>

              <li>
                <Link to="/services/engineering">
                  Engineering
                </Link>
              </li>

              <li>
                <Link to="/services/automation">
                  Automation
                </Link>
              </li>

              <li>
                <Link to="/services/electrical-site-installation">
                  Electrical Site Installation
                </Link>
              </li>

              <li>
                <Link to="/services/operation-maintenance">
                  Operation & Maintenance
                </Link>
              </li>

              <li>
                <Link to="/services/erection-commissioning-services">
                  Erection & Commissioning Services
                </Link>
              </li>

              <li>
                <Link to="/services/piping-engineering-design-3d-modelling">
                  Piping Engineering Design & 3D Modelling
                </Link>
              </li>
            </ul>
          </li>
          <li><a href="#inquiry">Inquiry Form</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#career">Career</a></li>
           
          <li className="contact-btn">
            <Link to="/contact">Contact</Link>
          </li>

        </ul>

      </nav>
    </header>
  );
};

export default Header;
