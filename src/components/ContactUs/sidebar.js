const Sidebar = () => {
  return (
    <div className="bg-white pa3">
      <div className="sidebar-header">
        <h2>Related Content</h2>
      </div>
      <div className="vh-25-m h5">
        <ul className="list pl0">
          <li className="dib bg-light-gray black fl ma2 pa3 br-pill">
            Help and Advice
          </li>
          <li className="dib bg-light-gray black fl ma2 pa3 br-pill">
            OpenLearn
          </li>
          <li className="dib bg-light-gray black fl ma2 pa3 br-pill">FAQs</li>
          <li className="dib bg-light-gray black fl ma2 pa3 br-pill">Course</li>
          <li className="dib bg-light-gray black fl ma2 pa3 br-pill">
            Posters
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
