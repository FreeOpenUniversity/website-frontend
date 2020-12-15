import OpenDegree from "../../Images/open_degree.jpg";
import MAMS from "../../Images/MAMS.jpg";
import BeingOU from "../../Images/BeingOU.jpg";

const Sidebar = () => {
  return (
    <div>
      <div className="bg-white pv4 ph3">
        <div className="sidebar-header">
          <h2 className="f4">Become an OU Student</h2>
        </div>
        <div className="sidebar-content">
          <ul className="list pl0">
            <li className="flex pb2 mb3">
              <img
                className="w-50"
                src={OpenDegree}
                alt="thumbnail of opendegree"
              />
              <p className="w-50 f6 mt0 pl2">BA/BSc (Honours) Open degree</p>
            </li>
            <li className="flex pb2 mb3">
              <img className="w-50" src={MAMS} alt="thumbnail of MA/MS oepn" />
              <p className="w-50 f6 mt0 pl2">MA/MSc Open</p>
            </li>
            <li className="flex pb2">
              <img
                className="w-50"
                src={BeingOU}
                alt="thumbnail of Being an OU student"
              />
              <p className="w-50 f6 mt0 pl2">Being an OU student</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
