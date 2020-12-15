import React from "react";
import { Link } from "react-router-dom";

export function CategoryScroller({ categories }) {
  return (
    <div className="flex flex-wrap">
      {categories.map(({ id, name }) => (
        <div key={name} className="f1 pa3 avenir black ttc mr2">
          <Link
            to={{
              pathname: "/category/" + name.toLowerCase(),
              state: { id, name },
            }}
            className="link dark-gray hover-green hover-animate"
          >
            {name}
          </Link>
        </div>
      ))}
    </div>
  );
}

// categories
// categories/[categoryId]/books
// books?category=categoryId
