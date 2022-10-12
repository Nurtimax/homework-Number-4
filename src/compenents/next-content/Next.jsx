import React from "react";
import leftLong from "../../assets/icons/Icons/24/Arrow/long_left.svg";
import rightLong from "../../assets/icons/Icons/24/Arrow/long_right.svg";

function Next() {
  return (
    <div>
      <div className="arrows__longs">
        <div className="new">Новинки</div>
        <div>
          <img src={leftLong} alt="leftlong" />
          <img src={rightLong} alt="rightlong" />
        </div>
      </div>
    </div>
  );
}

export default Next;
