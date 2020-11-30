import "./aboutus.css";
import AboutUs_Banner from "../../Images/about_us.jpg";
import OpenDegree from "../../Images/open_degree.jpg";
import MAMS from "../../Images/MAMS.jpg";
import BeingOU from "../../Images/BeingOU.jpg";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="breadcrumb">
        <div className="nav">
          <span>
            <i className="fas fa-home"></i>
          </span>
          <span className="title">About Us</span>
        </div>
      </div>
      <div className="banner">
        <img src={AboutUs_Banner} alt="Banner of About Us" />
        <div className="container">
          <div className="heading">
            <h1>About Us</h1>
            <p>Updated Friday, 25th October 2019</p>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="content">
          <div className="blog">
            <p id="summary-content">
              <b>Welcome to OpenLearn</b>- the home of free learning from The
              Open University. Are you looking for a new topic to explore, or
              want to dig deeper into something you've already discovered?
              Whether it’s a 60-second animated video or a 24-hour course you
              are after, you will find it on OpenLearn for free.
            </p>
            <div className="titlebar">
              <h2>
                <span
                  style={{
                    fontSize: "25px",
                    padding: "10px",
                    backgroundColor: "#fff",
                  }}
                >
                  <strong>Who We Are</strong>
                </span>
              </h2>
            </div>
            <div className="video">
              <iframe
                title="OpenLearn Introduction"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""
                frameborder="0"
                height="360"
                width="640"
                src="https://www.youtube.com/embed/oYkZkEjblUA"
              ></iframe>
            </div>
            <div className="text">
              <p>
                OpenLearn is a free learning platform, delivered by The Open
                University as part of its Royal Charter commitment to support
                the wellbeing of the community.
              </p>

              <p>
                Since its launch in 2006, OpenLearn has become an integrated
                part of The Open University, with the site attracting almost 75
                million visitors – many of which go on to make an enquiry about
                becoming a formal student, strengthening the journey between
                informal and formal learning.
              </p>
              <p>
                The OpenLearn team originate, commission and develop content
                that unites faculty and University priorities with areas of
                topical and general interest. This is in support of our own
                student population in their academic, skills and career and
                personal development (CPD) endeavours, delivering quality assets
                openly available for teaching and learning.
              </p>
            </div>
          </div>
          <div className="sidebar">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
