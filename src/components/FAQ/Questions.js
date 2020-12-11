export default function Question({ q, a, toggleQuestions }) {
  return (
    <div className="w-100">
      <div
        className="question pa3 pointer grow bg-light-gray mid-gray"
        onClick={toggleQuestions}
      >
        {q}
      </div>
      <div className="answer lh-copy ph4 overflow-hidden">{a}</div>
    </div>
  );
}
