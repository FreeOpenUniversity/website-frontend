import React from "react";
import { Link } from "react-router-dom";
import SubjectCard from "../components/SubjectCard";

import action from "../Images/Category/action.jpg";
import adventure from "../Images/Category/adventure.jpg";
import animation from "../Images/Category/animation.jpg";
import children from "../Images/Category/children.jpg";
import comedy from "../Images/Category/comedy.jpg";
import crime from "../Images/Category/crime.jpg";
import documentary from "../Images/Category/documentary.jpg";
import drama from "../Images/Category/drama.jpg";
import filmNoir from "../Images/Category/filmNoir.jpg";
import horror from "../Images/Category/horror.jpg";
import musical from "../Images/Category/musical.jpg";
import mystery from "../Images/Category/mystery.jpg";
import nogenres from "../Images/Category/nogenres.jpg";
import romance from "../Images/Category/romance.jpg";
import thriller from "../Images/Category/thriller.jpg";
import western from "../Images/Category/western.jpg";

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
