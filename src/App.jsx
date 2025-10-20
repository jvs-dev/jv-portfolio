import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MyHistory from "./pages/MyHistory/MyHistory";
import { LanguageProvider } from "./contexts/LanguageContext";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <LanguageProvider>
      <LoadingScreen />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MyHistory" element={<MyHistory />} />    
          <Route path="/data" element={<ProtectedRoute />} />    
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;