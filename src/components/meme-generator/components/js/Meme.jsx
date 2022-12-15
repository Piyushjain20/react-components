import "./../css/Meme.css";
export default function Meme({ inputs }) {
  return (
    inputs.memeData && (
      <div className="meme">
        <img src={inputs.memeData.url} alt="Meme Image" />
        <p>{inputs.top.toUpperCase()}</p>
        <p>{inputs.bottom.toUpperCase()}</p>
      </div>
    )
  );
}
