import React from "react";
import PropTypes from "prop-types";
import CustomContact2 from "./CustomContact2";
import phone2 from "../../assets/image/phone2.png";
import mail from "../../assets/image/mail.png";
import location2 from "../../assets/image/location2.png";

const CustomBanner4 = ({ tittle, tittleClass }) => {
  return (
    <div className="w-[90vw] h-[30vh] mx-auto mt-[2rem]">
      <div className="mb-[5rem]">
        <h1 className={tittleClass}>{tittle}</h1>
      </div>
      <div className="flex justify-center space-x-32">
        <CustomContact2
          imgSrc={phone2}
          tittle="Phone"
          description="123-456-7890"
        ></CustomContact2>
        <CustomContact2
          imgSrc={mail}
          tittle="Email"
          description="medicalis@gmail.com"
        ></CustomContact2>
        <CustomContact2
          imgSrc={location2}
          tittle="Location"
          description="123 Anywhere St. Amy City"
        ></CustomContact2>
      </div>
    </div>
  );
};

CustomBanner4.propTypes = {
  tittle: PropTypes.string,
  tittleClass: PropTypes.string,
};

export default CustomBanner4;
