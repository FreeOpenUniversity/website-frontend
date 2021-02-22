import SuspenseImage from "../SuspenseImage";

export default function SubjectCard({ title, img }) {
  return (
    <div className="mv3">
      <div className="tc bg-dark-blue b f4 h3 flex mh1 items-center justify-center br2 br--top">
        {title}
      </div>
      <div className="tc ph1">
        <SuspenseImage
          src={img}
          styles="w-100 h-100 br2 br--bottom"
          alt={`cover of subject ${title}`}
        />
      </div>
    </div>
  );
}
