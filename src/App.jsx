import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MyHistory from "./pages/MyHistory/MyHistory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MyHistory" element={<MyHistory />} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
