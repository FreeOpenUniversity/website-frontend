import React from "react";
import { Link } from "react-router-dom";
import SubjectCard from "../components/SubjectCard";

import action from "../Images/Category/action.webp";
import adventure from "../Images/Category/adventure.webp";
import animation from "../Images/Category/animation.webp";
import children from "../Images/Category/children.webp";
import comedy from "../Images/Category/comedy.webp";
import crime from "../Images/Category/crime.webp";
import documentary from "../Images/Category/documentary.webp";
import drama from "../Images/Category/drama.webp";
import filmNoir from "../Images/Category/filmNoir.webp";
import horror from "../Images/Category/horror.webp";
import musical from "../Images/Category/musical.webp";
import mystery from "../Images/Category/mystery.webp";
import nogenres from "../Images/Category/nogenres.webp";
import romance from "../Images/Category/romance.webp";
import thriller from "../Images/Category/thriller.webp";
import western from "../Images/Category/western.webp";

const covers = [
  { img: nogenres },
  { img: action },
  { img: adventure },
  { img: animation },
  { img: children },
  { img: comedy },
  { img: crime },
  { img: documentary },
  { img: drama },
  { img: filmNoir },
  { img: horror },
  { img: musical },
  { img: mystery },
  { img: romance },
  { img: thriller },
  { img: western },
];

export default function CategoryScroller({ categories }) {
  return (
    <div className="flex flex-wrap mw8-l mw100 center">
      {categories
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ id, name }, index) => (
          <div
            key={index}
            className="avenir black ttc w-25-l w-50 mb0 ph2 grow"
          >
            <Link
              to={{
                pathname: "/category/" + name.toLowerCase(),
                state: { id, name },
              }}
              className="link white hover-green"
            >
              <SubjectCard title={name} img={`${covers[index].img}`} />
            </Link>
          </div>
        ))}
    </div>
  );
}

// categories
// categories/[categoryId]/books
// books?category=categoryId
