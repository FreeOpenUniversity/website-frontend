import React from "react";
import { Link } from "react-router-dom";
export function CategoryScroller({ categories }) {
  return (
    <div>
      {categories.map(({ id, name }) => (
        <div key={name} className="f1 pa3 avenir bg-light-gray black ttc">
          <Link
            to={{ pathname: "/category/" + name.toLowerCase(), state: { id } }}
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
