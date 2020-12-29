const TitleBar = ({ title }) => (
  <div className="titlebar w100 mt4 mb3 h1 tl">
    <h2>
      <span className="ma0 pa3 f3 bg-white">
        <strong>{title}</strong>
      </span>
    </h2>
  </div>
);

export default function Content() {
  return (
    <div>
      <p id="summary-content">
        <b>Welcome to Collegiate Independent Study</b>- the home of free
        learning from The Open University. Are you looking for a new topic to
        explore, or want to dig deeper into something you've already discovered?
        Whether it’s a 60-second animated video or a 24-hour course you are
        after, you will find it on Collegiate Independent Study for free.
      </p>
      {/* Section: Who We Are */}
      <TitleBar title="Who We Are" />
      <div className="tc center mv4">
        <iframe
          title="Collegiate Independent Study Introduction"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          height="360"
          width="640"
          src="https://www.youtube.com/embed/oYkZkEjblUA"
          className="mw100 blog-video"
        ></iframe>
      </div>
      <div className="text">
        <p>
          Collegiate Independent Study is a free learning platform, delivered by
          The Open University as part of its Royal Charter commitment to support
          the wellbeing of the community.
        </p>

        <p>
          Since its launch in 2006, Collegiate Independent Study has become an
          integrated part of The Open University, with the site attracting
          almost 75 million visitors – many of which go on to make an enquiry
          about becoming a formal student, strengthening the journey between
          informal and formal learning.
        </p>
        <p>
          The Collegiate Independent Study team originate, commission and
          develop content that unites faculty and University priorities with
          areas of topical and general interest. This is in support of our own
          student population in their academic, skills and career and personal
          development (CPD) endeavours, delivering quality assets openly
          available for teaching and learning.
        </p>
      </div>
      {/* Section: What We Do */}
      <TitleBar title=" What We Do" />
      <div className="tc center mv4">
        <iframe
          title="Collegiate Independent Study Introduction"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          height="360"
          width="640"
          src="https://www.youtube.com/embed/vUxEC5c-Rc0"
          className="mw100 blog-video"
        ></iframe>
      </div>
      <div className="text">
        <p>
          We deliver bite-sized learning experiences designed to fit easily into
          daily life, so whether you're a busy parent looking to get promoted at
          work, or back-packing across Africa and wanting to increase your
          learning, we are open with no requirements to access our free
          materials.
        </p>
        <p>Some of our academic-led content includes:</p>
        <ul>
          <li>900+ short courses (ranging from 1 - 100 hours of study)</li>
          <li>thousands of articles, quizzes and interactive games </li>
          <li>
            hundreds of videos and audios, ranging from Greek history to
            modern-day politics, and everything in between{" "}
          </li>
          <li>
            printed posters and booklets made for our TV & radio programmes
            co-produced with the BBC.
          </li>
        </ul>
        <p>
          Our content covers a wide range of subjects, with many of our free
          courses being adapted extractions from CIS modules. All of our courses
          enable you to earn a Statement of participation and some also allow
          you to earn a free digital badge. You can use your badge or statement
          of participation to share your achievement with others although they
          do not carry any formal credit towards a qualification.
        </p>
        <p>
          <strong>Looking for study tips or life advice?</strong> Then look no
          further as our 'For Study' and 'For Life' resources will help prepare
          you for study, aid your progression to keep you on track, and then
          when you are ready, offer guidance towards a fulfilling career.
        </p>
      </div>
      {/* Section: Why We Do It */}
      <TitleBar title="Why We Do It" />
      <div className="text">
        <p>
          Our vision is to break down barriers to education by reaching millions
          of learners each year, through free educational resources.
        </p>
        <p>
          Free learning resources are core to our social mission as we believe
          that the main barriers to starting education are access, lack of
          confidence and cost. The Open University aims to remove these barriers
          through:
        </p>
        <ul>
          <li>
            building on formats and platforms that are available offline and
            online, improving our discoverability and <strong>access </strong>
          </li>
          <li>
            eliminating <strong>cost</strong> through underpinning the delivery
            of free learning through sound and sustainable business models
          </li>
          <li>
            improving learner esteem and <strong>confidence</strong> through the
            gaining of badges and statements of participation.
          </li>
        </ul>
        <p>
          The Open University has a radical and pioneering approach to access.
          Matching its refusal to place qualifications barriers in front of our
          own students, it also has a commitment to release and promote free
          learning content and systems for others. In addition, we exploit these
          materials and systems in developing localised solutions. Through grant
          and donor support and by working closely with local stakeholders we
          have developed a number of projects that offer open educational
          resources to targeted groups in deprived populations.{" "}
        </p>
      </div>
      {/* Section: What you can do */}
      <TitleBar title="What you can do" />
      <div className="text">
        <ul>
          <li>
            browse the subject categories to discover articles, watch videos and
            interact with features and games created by our academic experts and
            guest contributors
          </li>
          <li>
            explore new topics to build your personal knowledge or look for
            reference material for a course you are already studying
          </li>
          <li>
            join the debates - hit the Comments area on all our pages to make
            your voice heard, rate how we're doing and share with your friends
          </li>
          <li>take one of our free courses</li>
          <li>
            earn a digital badge or statement of participation as evidence of
            your learning
          </li>
          <li>check out our resources and guides For Study and For Life</li>
          <li>
            find out What's On TV and radio - great Open University programmes
            on the BBC
          </li>
          <li>
            Check out our other initiatives such as our collaborative courses
            with the Social Partnership Network and Collegiate Independent Study
            Create, where individuals and organisations can publish their own
            free courses and resources
          </li>
          <li>
            follow us on social media - @ouopenlearn on Facebook,
            @oufreelearning on Twitter and @openlearn on Instagram
          </li>
          <li>
            subscribe to our monthly newsletter to get the latest from
            Collegiate Independent Study
          </li>
          <li>
            learn what new courses and content are in the pipeline with our
            ‘coming soon’ page
          </li>
          <li>
            discover the current most popular courses, articles and interactives
            with our top 10 lists
          </li>
        </ul>
      </div>
    </div>
  );
}
