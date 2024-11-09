import React from "react";
import footer from "../../assets/image/footer.png";
import phone from "../../assets/image/phone.png";
import arrow from "../../assets/image/arrow.png";
import mail2 from "../../assets/image/mail2.png";
import location from "../../assets/image/location.png";
import facebook from "../../assets/image/facebook.png";
import linkedin from "../../assets/image/linkedin.png";
import instagram from "../../assets/image/instagram.png";
import CustomLink from "../Utilities/CustomLink";
import CustomContact3 from "../Utilities/CustomContact3";

const Footer = () => {
  return (
    <footer className="w-screen overflow-hidden z-40">
      <div
        className="bg-cover bg-no-repeat bg-center h-[100vh] w-screen "
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085001/footer_ok77dx.png")`,
          backgroundPosition: "top center", // Asegura que la parte superior de la imagen se alinee al contenedor
        }}
      >
        <div className="w-[90vw] mx-auto flex">
          <div className=" pt-[38rem] space-y-8">
            <CustomContact3
              imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085003/location_jbrk05.png"
              tittle="123 Anywhere St., Any City 12345"
            ></CustomContact3>
            <CustomContact3
              imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085009/phone_ufsx1m.png"
              tittle="123-456-7890"
            ></CustomContact3>
            <CustomContact3
              imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085006/mail2_wo7dgc.png"
              tittle="medicalis@gmail.com"
            ></CustomContact3>
          </div>
          <div className=" pt-[30rem] space-y-8 ml-[8rem]">
            <CustomLink
              tittle="About Us"
              tittleClass="text-[#274760] text-[1.3rem]"
              to="#about"
            ></CustomLink>
            <CustomLink
              tittle="Departments"
              tittleClass="text-[#274760] text-[1.3rem]"
              to=""
            ></CustomLink>
            <CustomLink
              tittle="Doctors"
              tittleClass="text-[#274760] text-[1.3rem]"
              to=""
            ></CustomLink>
            <CustomLink
              tittle="Timetable"
              tittleClass="text-[#274760] text-[1.3rem]"
              to=""
            ></CustomLink>
            <CustomLink
              tittle="Appointment"
              tittleClass="text-[#274760] text-[1.3rem]"
              to=""
            ></CustomLink>
            <CustomLink
              tittle="Testimonials"
              tittleClass="text-[#274760] text-[1.3rem]"
              to=""
            ></CustomLink>
          </div>
          <div className=" pt-[30rem] space-y-8 ml-[8rem]">
            <CustomLink
              tittle="Blog"
              tittleClass="text-[#274760] text-[1.3rem]"
              to="/nosotros"
            ></CustomLink>
            <CustomLink
              tittle="Contact Us"
              tittleClass="text-[#274760] text-[1.3rem]"
              to=""
            ></CustomLink>
            <CustomLink
              tittle="FAQs"
              tittleClass="text-[#274760] text-[1.3rem]"
              to=""
            ></CustomLink>
            <CustomLink
              tittle="Privacy Policy"
              tittleClass="text-[#274760] text-[1.3rem]"
              to=""
            ></CustomLink>
            <CustomLink
              tittle="Terms and Conditions"
              tittleClass="text-[#274760] text-[1.3rem]"
              to=""
            ></CustomLink>
          </div>
          <div className=" pt-[27rem] space-y-8 ml-auto">
            <div>
              <h1 className="text-[#274760] text-[3rem] font-semibold">
                Be Our Subscribers
              </h1>
              <p className="text-[#274760] text-[1.8rem] whitespace-pre-line">
                To get the latest news about health from our experts
              </p>
            </div>
            <div className="flex py-1 border  border-[#307BC4] rounded-[2rem] items-center justify-center">
              <input
                type="text"
                placeholder="example@gmail.com"
                className="bg-transparent text-[1.2rem] text-[#8F9FAC] ml-20 border-none focus:outline-none focus:text-white"
              />
              <button
                type="submit"
                className="flex  ml-auto text-[1.2rem] bg-[#295172] text-white px-10 font-semibold  rounded-[2rem] items-center"
              >
                Submit{" "}
                <img
                  src="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085888/arrow-right_kubz4k.png"
                  alt="img"
                  className="pl-4 h-20 w-20"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#307BC4] py-8 w-screen">
        <div className="flex items-center justify-between w-[90vw] mx-auto">
          <div className="flex items-center space-x-8">
            <h1 className="text-white text-[1.2rem] font-semibold">
              Follow Us
            </h1>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <img
                src="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085000/facebook_r1uclp.png"
                alt="Facebook"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <img
                src="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085003/linkedin_ybqlyn.png"
                alt="LinkedIn"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <img
                src="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085002/instagram_gynkf3.png"
                alt="Instagram"
                className="w-8 h-8"
              />
            </a>
          </div>
          <h1 className="text-[#8F9FAC] text-[1.2rem]">
            Copyright © 2024 All rights reserved
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
