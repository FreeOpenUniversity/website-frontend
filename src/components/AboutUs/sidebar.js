import OpenDegree from "../../Images/open_degree.jpg";
import MAMS from "../../Images/MAMS.jpg";
import BeingOU from "../../Images/BeingOU.jpg";

const Sidebar = () => {
  return (
    <div className="sidebar-becomeStudent">
      <div className="sidebar-header">
        <h2>Become an OU Student</h2>
      </div>
      <div className="sidebar-content">
        <ul>
          <li>
            <img src={OpenDegree} alt="thumbnail of opendegree" />
            <p>BA/BSc (Honours) Open degree</p>
          </li>
          <li>
            <img src={MAMS} alt="thumbnail of MA/MS oepn" />
            <p>MA/MSc Open</p>
          </li>
          <li>
            <img src={BeingOU} alt="thumbnail of Being an OU student" />
            <p>Being an OU student</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
