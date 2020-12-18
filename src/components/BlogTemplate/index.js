import PropTypes from "prop-types";

export default function Template({ Main, Sidebar, dir }) {
  return (
    <div className="center mw8-l mw100 min-vh-100">
      {!dir ? (
        <>
          <div className="fl w-70 w-100-m ph4 pv3 bg-white mv3 min-vh-100">
            <Main />
          </div>
          <div className="fl w-30 w-100-m ph3 ph0-m mv3 min-vh-100">
            <Sidebar />
          </div>
        </>
      ) : (
        <>
          <div className="fl w-30 w-100-m ph3 ph0-m mv3 min-vh-100">
            <Sidebar />
          </div>
          <div className="fl w-70 w-100-m ph4 pv3 bg-white mv3 min-vh-100">
            <Main />
          </div>
        </>
      )}
    </div>
  );
}

Template.propTypes = {
  Main: PropTypes.func.isRequired,
  Sidebar: PropTypes.func.isRequired,
  dir: PropTypes.string,
};
