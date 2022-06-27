import Card from './Card';

function App() {
  return (
    <div className="App">
      <Card
        title="Card with picture of a Dog"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
      >
        <img src="https://ichef.bbci.co.uk/news/800/cpsprodpb/475B/production/_98776281_gettyimages-521697453.jpg.webp" className="card-img-top" alt="..."/>
      </Card>
      <Card
        title="Another card without picture"
        text="Some quick example text for Card without picture"
      />
    </div>
  );
}

export default App;
