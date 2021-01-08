export default function SubjectCard({ title, img }) {
  return (
    <div className="mv3">
      <div className="tc bg-dark-blue b f4 h3 flex mh1 items-center justify-center">
        {title}
      </div>
      <div className="tc ph1">
        <img
          src={img}
          className="w-100 h-100"
          alt={`cover of subject ${title}`}
        />
      </div>
    </div>
  );
}
