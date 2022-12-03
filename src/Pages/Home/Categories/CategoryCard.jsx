import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { categoriesId, categoryName, categoryImg } = category;
  return (
    <Link to={`/category/${categoriesId}`}>
      <div className="shadow-md hover:shadow-xl delay-100 rounded-2xl p-6 relative overflow-hidden cursor-pointer">
        <h4 className="text-xl mb-10 text-main font-semibold">
          {categoryName}
        </h4>
        <button className="text-sm flex items-center text-btn">
          See Collection <i className="bx bx-right-arrow-alt text-sm"></i>
        </button>
        <img className="absolute top-0 right-0" src={categoryImg} alt="" />
      </div>
    </Link>
  );
};

export default CategoryCard;
