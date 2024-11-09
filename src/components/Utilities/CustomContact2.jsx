import React from "react";
import PropTypes from "prop-types";

const CustomContact2 = ({
  containerClass,
  subContainerClass,
  imgSrc,
  imgClass,
  tittle,
  description,
  titleClass,
  descriptionClass,
}) => {
  return (
    <div className="bg-[#DDEFF3] w-[30rem] h-[8rem] rounded-[2rem] flex justify-center shadow-xl">
      <div className="flex items-center">
        <img src={imgSrc} alt="phone icon" className="w-[4rem] h-[4rem]" />
        <div>
          <h1 className="ml-[2rem] text-[#274760] text-[1.5rem] font-semibold">
            {tittle}
          </h1>
          <h2 className="ml-[2rem] text-[#597185] text-[1.4rem] ">
            {description}
          </h2>
        </div>
      </div>
    </div>
  );
};

CustomContact2.propTypes = {
  containerClass: PropTypes.string,
  subContainerClass: PropTypes.string,
  imgSrc: PropTypes.string,
  imgClass: PropTypes.string,
  tittle: PropTypes.string,
  description: PropTypes.string,
  titleClass: PropTypes.string,
  descriptionClass: PropTypes.string,
};

export default CustomContact2;
