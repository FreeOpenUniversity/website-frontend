import PropTypes from "prop-types";

export default function Template({ blog, sidebar }) {
  return (
    <div className="main">
      <div className="content">
        <div className="blog">{blog}</div>
        <div className="sidebar">{sidebar}</div>
      </div>
    </div>
  );
}

Template.propTypes = {
  blog: PropTypes.func.isRequired,
  sidebar: PropTypes.func.isRequired,
};
