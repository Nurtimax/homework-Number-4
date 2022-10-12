import React from "react";
import './Select.css'

const Select = () => {
  return (
    <div className="location">
      <select name="" id="select">
        <option value="Bishkek">Bishkek</option>
        <option value="Chui">Chui</option>
        <option value="Naryn">Naryn</option>
        <option value="Talas">Talas</option>
        <option value="Batken">Batken</option>
        <option value="Issyk-kol">Issyk-kol</option>
        <option value="Osh">Osh</option>
        <option value="Jalal-abad">Jalal-abad</option>
      </select>
    </div>
  );
};

export default Select;
