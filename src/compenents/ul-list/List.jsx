import React from "react";

const List = ({headerData}) => {
  return (
    <ul className="header__lists">
      {headerData.map((item) => {
        return <li key={item.id}>{item.lists}</li>;
      })}
    </ul>
  );
};

export default List;
