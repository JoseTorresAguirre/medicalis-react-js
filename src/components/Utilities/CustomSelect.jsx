import React from "react";
import PropTypes from "prop-types";

const CustomSelect = ({
  containerClass,
  tittle,
  labelClass,
  selectClass,
  option1,
  optionValue2,
  option2,
  selectName,
}) => {
  return (
    <div className={containerClass}>
      <label className={labelClass}>{tittle}</label>
      <select className={selectClass} required name={selectName}>
        <option>{option1}</option>
        <option value={optionValue2}>{option2}</option>
      </select>
    </div>
  );
};

CustomSelect.propTypes = {
  containerClass: PropTypes.string,
  tittle: PropTypes.string,
  labelClass: PropTypes.string,
  selectClass: PropTypes.string,
  option1: PropTypes.string,
  optionValue2: PropTypes.string,
  option2: PropTypes.string,
  selectName: PropTypes.string,
};

export default CustomSelect;
