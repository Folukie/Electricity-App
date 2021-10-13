import React from "react";
import styles from "./select.module.css"

const Select = () => {
  return (
    <div className={styles.selection}>
      <select name="selection" >
        <option value="ikeja">Ikeja Electricity</option>
        <option value="abuja">Abuja Elec</option>
        <option value="kano">Kano Elec</option>
        <option value="ogun">Ogun Elec</option>
      </select>
    </div>
  );
};

export default Select;
