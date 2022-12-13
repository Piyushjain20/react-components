import "./TravelJournalApp.css";
import Card from "./js/Card";
import data from "./assets/data";
import NavBar from "./js/Navbar";

function App() {
  const cardlist = data.map((cardData) => <Card key={cardData.title} {...cardData} />);
  return (
    <div className="App">
      <NavBar />
      {cardlist}
    </div>
  );
}

export default App;
