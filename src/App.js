import "./App.css";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Outlet />
      <footer>2024</footer>
    </div>
  );
}

export default App;
