import "./App.css";
import { CITIES } from "./components/cities";
import { CityList } from "./components/CityList";

function App() {
  return (
    <div className="App">
      <CityList cities={CITIES} />
    </div>
  );
}

export default App;
