function App() {
  const { useState, useEffect } = React;
  const { Container, Button} = ReactBootstrap;
  const [data, setData] = useState({});
  const [refresh, setRefresh] = useState(0);
  const [url, setUrl] = useState("https://randomfox.ca/floof/");

  console.log("Rendering App");

  useEffect(() => {
    console.log("Fetching data...");
    const fetchData = async () => {
      const result = await axios(url);
      setData(result.data);
    };

    fetchData();
  }, [refresh]);

  const handleClick = () => {
    setRefresh(refresh + 1);
  }

  return (
    <Container className="d-flex flex-column align-items-center">
      <h1>Random Fox Generator</h1>
      <Button onClick={handleClick} variant="primary" size="lg" className="m-4">See More Foxes</Button>
      <div className="image-limits">
        <img className="fox-pic"src={data.image}></img>
      </div>
    </Container>
  );
}
// ========================================
ReactDOM.render(<App />, document.getElementById("root"));

