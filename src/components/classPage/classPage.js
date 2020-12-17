import React from "react";
import ClassList from "./ClassList";
import Footer from "../Footer";

let dumData = {
  title: "Class 1: Intro to Something",
  desc:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque augue quis ligula dignissim porttitor. Quisque eu enim efficitur, tincidunt eros eu, bibendum nunc. Donec ornare mauris a lorem dignissim, vitae rhoncus sem lobortis. Cras in leo dapibus, finibus turpis eu, pellentesque turpis. Nunc sit amet mauris semper, pharetra erat a, fringilla urna. Suspendisse consectetur, ligula a venenatis varius, lacus massa semper arcu, sed dictum mauris eros venenatis eros.",
  imgLink:
    "https://insektenliebe.com/wp-content/uploads/2018/05/Cubaris-spec.-Rubber-Ducky-9-bearbeitet.jpg",
  imgAlt: "Rubber ducky",
  progress: "32",
  links: {
    chapters: "#",
    scores: "#",
    keepG: "#",
  },
};

function App() {
  return (
    <div>
      <ClassList {...dumData} />
      <Footer />
    </div>
  );
}

export default App;
