import React from "react";
import { api } from "../../store";
import ClassList from "./ClassList";
import { connect } from "react-redux";

function ClassPage(props) {
  const { classes } = props;
  api.userhistory.read();

  let holderIp = [],
    holderCom = [],
    holderFav = [];
  let count1 = 0,
    count2 = 0,
    count3 = 0;
  classes.forEach((d) => {
    let a = {
      classNum: 0,
      title: d.saved,
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque augue quis ligula dignissim porttitor. Quisque eu enim efficitur, tincidunt eros eu, bibendum nunc. Donec ornare mauris a lorem dignissim, vitae rhoncus sem lobortis. Cras in leo dapibus, finibus turpis eu, pellentesque turpis. Nunc sit amet mauris semper, pharetra erat a, fringilla urna.",
      imgLink:
        "https://insektenliebe.com/wp-content/uploads/2018/05/Cubaris-spec.-Rubber-Ducky-9-bearbeitet.jpg",
      progress: d.progress,
      links: {
        chapters: "#",
        scores: "#",
        keepG: "#",
      },
    };
    if (d.progress === 0.0) {
      count1 += 1;
      a.classNum = count1;
      holderFav.push(a);
    } else if (d.progress < 1.0) {
      count2 += 1;
      a.classNum = count2;
      holderIp.push(a);
    } else {
      count3 += 1;
      a.classNum = count3;
      holderCom.push(a);
    }
  });
  return (
    <div>
      <h1 className="mid-gray athelas tracked-tight pl4 f3"> In Progress </h1>
      {holderIp.map((data) => (
        <ClassList {...data} />
      ))}

      <hr />
      <h1 className="mid-gray athelas tracked-tight pl4 f3"> Completed </h1>
      {holderCom.map((data) => (
        <ClassList {...data} />
      ))}

      <hr />
      <h1 className="mid-gray athelas tracked-tight pl4 f3"> Favorites </h1>
      {holderFav.map((data) => (
        <ClassList {...data} />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return { classes: state.userhistory };
}

export default connect(mapStateToProps)(ClassPage);
