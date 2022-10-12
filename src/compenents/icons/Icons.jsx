import React from "react";

const Icons = ({headerUrl}) => {
  return (
    <div className="icons">
      {headerUrl.map((item) => {
        return (
          <figure key={item.id}>
            <img src={item.url} alt="search" />
          </figure>
        );
      })}
    </div>
  );
};

export default Icons;
