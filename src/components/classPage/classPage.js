import React from "react";
import ClassList from "./ClassList";
import Footer from "../Footer/index";
import Header from "../Header/Header"; 
import dumData from "./classDumData.json";

function App() {
  let inProg = [],
    compl = [],
    favorts = [];
  dumData.forEach((data) => {
    if (data.progress == 0.0) {
      favorts.push(data);
    } else if (data.progress < 1.0) {
      inProg.push(data);
    } else {
      compl.push(data);
    }
  });

  return (
    <div>
      <Header />
      <h1 className="mid-gray athelas tracked-tight pl4 f3"> In Progress </h1>
      {inProg.map((data) => (
        <ClassList {...data} />
      ))}

      <hr />
      <h1 className="mid-gray athelas tracked-tight pl4 f3"> Completed </h1>
      {compl.map((data) => (
        <ClassList {...data} />
      ))}

      <hr />
      <h1 className="mid-gray athelas tracked-tight pl4 f3"> Favorites </h1>
      {favorts.map((data) => (
        <ClassList {...data} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
