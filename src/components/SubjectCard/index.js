import COVER from "../../Images/card_cover.png";

export default function SubjectCard({ title }) {
  return (
    <div className="">
      <div className="tc bg-red b f3 h3 flex items-center justify-center">
        {title}
      </div>
      <div className="tc">
        <img
          src={COVER}
          className="h4 w-100"
          alt={`cover of subject ${title}`}
        />
      </div>
    </div>
  );
}
