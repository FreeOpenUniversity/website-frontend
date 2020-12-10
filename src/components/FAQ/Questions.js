export default function Question({ q, a, toggleQuestions }) {
  return (
    <div className="w-100">
      <div className="question pa3 pointer" onClick={toggleQuestions}>
        {q}
      </div>
      <div className="answer ph4 ">{a}</div>
    </div>
  );
}
