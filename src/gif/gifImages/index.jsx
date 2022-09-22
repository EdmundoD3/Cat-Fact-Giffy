import "./style.css";

export default function GifImages({ words, title, url }) {
  return (
    <div className="box-gif">
      <h4>{title}</h4>
      <img src={url} alt={title} />
    </div>
  );
}
