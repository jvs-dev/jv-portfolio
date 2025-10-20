import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MyHistory from "./pages/MyHistory/MyHistory";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MyHistory" element={<MyHistory />} />        
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;