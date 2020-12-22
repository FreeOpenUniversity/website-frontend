import React from "react";
import { Link } from "react-router-dom";
import SubjectCard from "../components/SubjectCard";
export function CategoryScroller({ categories }) {
  return (
    <div className="flex flex-wrap mw8-l mw100 center">
      {categories.map(({ id, name }) => (
        <div
          key={name}
          className="avenir black ttc w-25 w-50-m mb4 mb3-m ph2 grow"
        >
          <Link
            to={{
              pathname: "/category/" + name.toLowerCase(),
              state: { id, name },
            }}
            className="link dark-gray hover-white bg-black"
          >
            <SubjectCard title={name} />
            {/* {name} */}
          </Link>
        </div>
      ))}
    </div>
  );
}

// categories
// categories/[categoryId]/books
// books?category=categoryId
