import { Link } from "react-router-dom";

export default function BreadCrumb({ title }) {
  return (
    <div className="bg-light-gray dib w-100 pa3">
      <div className="center mv1 mw8-l mw100-m">
        <div className="dib">
          <Link to="/">
            <i className="fas fa-home link black"></i>
          </Link>
        </div>
        <div className="mh3 dib">⮞</div>
        <div className="dib">{title}</div>
      </div>
    </div>
  );
}
