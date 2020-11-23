import React from "react";
import { Link } from "react-router-dom";

export function CategoryScroller({ categories }) {
  return (
    <div className="h-100 dib">
      {categories.map(({ id, name }) => (
        <div key={name} className="f1 pa3 avenir black ttc fl mr2">
          <Link
            to={{
              pathname: "/category/" + name.toLowerCase(),
              state: { id, name },
            }}
            className="link blueprint-blue hover-fawn hover-animate"
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
