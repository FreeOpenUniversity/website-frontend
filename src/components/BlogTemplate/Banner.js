export default function Banner({ title, date, image }) {
  return (
    <div className="h-50 overflow-hidden">
      <img className="w-100 h-25" src={image} alt="Banner of About Us" />
      <div className="relative mw8 mw100-m center">
        <div className="bg-dark-gray white absolute bottom-2 ph4">
          <h1>{title}</h1>
          <p>
            <em>Updated {date}</em>
          </p>
        </div>
      </div>
    </div>
  );
}
