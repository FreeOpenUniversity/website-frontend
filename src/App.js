import "./App.css";
import { CategoryScroller } from "./CategoriesScroller";
import { SearchBar } from "./SearchBar";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
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
}

export default App;
