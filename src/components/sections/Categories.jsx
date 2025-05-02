import React, { use } from "react";
import { NavLink } from "react-router";
const catPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const categories = use(catPromise);
  return (
    <div>
      <h2 className="text-xl font-semibold cursor-default mb-2">
        All Categories({categories.length})
      </h2>
      <ul id="categories" className="">
        {categories.map((category) => (
          <li key={category.id}>
            <NavLink
              className="btn w-full border-0 bg-transparent shadow-none justify-start"
              to={`/category/${category.id}`}
            >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
