import Question from "./Questions";

const dummyData = [
  {
    q: "What is CIS courses?",
    a:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
  },
  {
    q: "How do I sign up?",
    a:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
  },
  {
    q: "How do I start a course?",
    a:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
  },
  {
    q: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    a:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
  },
  {
    q: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    a:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
  },
];

const toggleQuestions = (e) => {
  let questions = document.getElementsByClassName("question");
  let answers = document.getElementsByClassName("answer");

  let currAnswer = e.target.nextElementSibling;
  if (currAnswer.style.maxHeight) {
    e.target.classList.remove("selected");
    currAnswer.style.maxHeight = null;
  } else {
    for (let i of questions) {
      i.classList.remove("selected");
    }
    for (let j of answers) {
      j.style.maxHeight = null;
    }
    e.target.classList.add("selected");
    currAnswer.style.maxHeight = currAnswer.scrollHeight + "px";
  }
};

export default function Content() {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <div>
        Do you have a question about our free courses, statements of
        participation, digital badges or the My CIS profile?
      </div>
      <div> The chances are that we may have already answered it.</div>

      <h2>Using CIS for the first time? We got you!</h2>
      {dummyData.map((data) => (
        <Question q={data.q} a={data.a} toggleQuestions={toggleQuestions} />
      ))}
    </div>
  );
}
