import React from "react";
import styles from "./radio.module.css";

const Radio = ({ options, name, onChange, ...otherProps }) => {
  return (
    <div className={styles["radio-group"]}>
      {options
        ? options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                value={option}
                name={name}
                onChange={onChange}
                {...otherProps}
              />
              <label>{option}</label>
            </div>
          ))
        : null}
    </div>
  );
};

export default Radio;
