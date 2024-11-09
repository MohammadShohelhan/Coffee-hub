import React from "react";
import { NavLink, useParams } from "react-router-dom";

const Category = ({ categories }) => {
  return (
    <div id="categories" role="tablist" className="tabs tabs-lifted">
      {categories.map((data) => (
        <NavLink
          to={`/coffeCard/${data.category}`}
          key={data.category}
          role="tab"
          className={ ({isActive}) =>`tab ${isActive? 'tab-active': ''}`}>
          {data.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Category;
