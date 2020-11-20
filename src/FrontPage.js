import React from "react";
import { SearchBar } from "./SearchBar";
import { CategoryScroller } from "./CategoriesScroller";
import { Footer } from './components/Footer'

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
      <Footer />
    </div>
  );
};
