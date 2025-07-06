import React from "react";
import { NavLink } from "react-router-dom";
import FooterApi from "../../api/FooterApi.json";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { IoCallSharp } from "react-icons/io5";

const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };
  return (
    <>
      <footer className="footer-section">
        <div className="container grid grid-three-cols">
          {FooterApi.map((data, idx) => {
            const { icon, title, details } = data;
            return (
              <div className="footer-contact" key={idx}>
                <div className="icon">{footerIcon[icon]}</div>
                <div className="footer-contact-text">
                  <p>{title}</p>
                  <p>{details}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="grid grid-two-cols">
              <div className="copyright-text">
                <p>Copyright &copy; 2025, All Right Reserved</p>
              </div>

              <div className="footer-menu">
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/" target="_blank">
                      Social
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" target="_blank">
                      Source Code
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" target="_blank">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
