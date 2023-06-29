import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import "bootstrap/dist/css/bootstrap.min.css";
// import TestImage from "./screens/TestImage";

function App() {
  return (
    <div className="bg-slate-950 min-h-[100vh] overflow-y-scroll prompt text-zinc-300 App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
