import "./../css/Main.css";
export default function Main(props) {
  return (
    <form onSubmit={props.submitHandler}>
      <div className="input-holder">
        <input type="text" name="top" id="top" placeholder="Top Text" />
        <input type="text" name="bottom" id="bottom" placeholder="Bottom Text" />
      </div>
      <button type="submit" className="submit-btn">
        Get a new meme image 🖼
      </button>
    </form>
  );
}
