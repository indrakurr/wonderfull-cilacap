import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";
import DetailDestination from "./pages/DetailDestination";
import LoginPage from './pages/LoginPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail-destination" element={<DetailDestination />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
