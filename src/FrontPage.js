import React from "react";
import { SearchBar } from "./SearchBar";
import { CategoryScroller } from "./CategoriesScroller";

export const FrontPage = () => {
  return (
    <div className="avenir">
      <header></header>
      <SearchBar />
      <CategoryScroller
        categories={[
          { name: "driving" },
          { name: "singing" },
          { name: "Philosophy" },
        ]}
      />
    </div>
  );
};
