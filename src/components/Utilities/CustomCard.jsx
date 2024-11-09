import React from "react";
import PropTypes from "prop-types";

const CustomCard = ({
  containerClass,
  imgSrc,
  tittle,
  description,
  imgClass,
  tittleClass,
  descriptionClass,
}) => {
  return (
    <div
      className={`${containerClass} flex flex-col w-[25rem] h-[16rem]  rounded-[2rem] shadow-2xl`}
    >
      <div className="flex justify-center items-center py-[2rem]">
        <img src={imgSrc} alt="img" className="w-14 h-14" />
        <h1 className="text-[#274760] px-10 text-[1.5rem] font-semibold">
          {tittle}
        </h1>
      </div>
      <div className="flex justify-center">
        <p className="flex text-center text-[#8F9FAC] text-[0.8rem] whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
};

CustomCard.propTypes = {
  containerClass: PropTypes.string,
  imgSrc: PropTypes.string,
  tittle: PropTypes.string,
  description: PropTypes.string,
  imgClass: PropTypes.string,
  tittleClass: PropTypes.string,
  descriptionClass: PropTypes.string,
};

export default CustomCard;
