import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Players } from "./components/Players";
import { SinglePlayer } from "./components/SinglePlayer";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <h1>Puppy Bowl</h1>
      <Nav />
      <Routes>
        <Route path="/" element={<Players />} />
        <Route path="/:id" element={<SinglePlayer />} />
      </Routes>
    </div>
  );
}

export default App;
