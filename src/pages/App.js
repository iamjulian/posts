import "../css/App.css";
import Home from "../components/Home";

function App() {
  return (
    <div className="App">
      {/* A layout component could have been used here to wrap all the child components with a nav component
      But i preffered to place it in all the three page components individually to make the codes less complicated
      as there wasn't much page components involved */}
      <Home />
    </div>
  );
}

export default App;
