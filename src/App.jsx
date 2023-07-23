import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Upload from "./Pages/Upload";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
