import React from "react";
import { api } from "../../store";
import ClassList from "./ClassList";
import { connect } from "react-redux";

function ClassPage(props) {
  let { classes } = props;
  api.userhistory.read();
  classes = Object.values(classes);
  let groups = {
    ["In Progress"]: [],
    Completed: [],
    Favorites: [],
  };
  classes
    .map((Class, i) => ({
      classNum: i,
      title: Class.saved,
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque augue quis ligula dignissim porttitor. Quisque eu enim efficitur, tincidunt eros eu, bibendum nunc. Donec ornare mauris description lorem dignissim, vitae rhoncus sem lobortis. Cras in leo dapibus, finibus turpis eu, pellentesque turpis. Nunc sit amet mauris semper, pharetra erat description, fringilla urna.",
      imgLink:
        "https://insektenliebe.com/wp-content/uploads/2018/05/Cubaris-spec.-Rubber-Ducky-9-bearbeitet.jpg",
      progress: Class.progress,
      progressGroup:
        Class.progress === 0.0
          ? "Favorites"
          : Class.progress < 1.0
          ? "In Progress"
          : "Completed",
      links: {
        chapters: "#",
        scores: "#",
        keepG: "#",
      },
    }))
    .forEach((Class) => (groups[Class.progressGroup] = Class));

  return (
    <div>
      {Object.entries(groups).map(([name, classes]) => (
        <>
          <h1 className="mid-gray athelas tracked-tight pl4 f3"> {name} </h1>
          {classes.map((data) => (
            <ClassList {...data} />
          ))}
        </>
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return { classes: state.userhistory };
}

export default connect(mapStateToProps)(ClassPage);
