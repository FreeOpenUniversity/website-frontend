export default function Question({ q, a, toggleQuestions }) {
  return (
    <div className="w-100">
      <div
        className="question pa3 pointer grow bb fw6"
        onClick={toggleQuestions}
      >
        {q}
      </div>
      <div className="answer lh-copy ph4 overflow-hidden bg-light-gray">
        {a}
      </div>
    </div>
  );
}
