import './App.css';
import HomePage from "./pages/HomePage";
import DetailDestination from "./pages/DetailDestination";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail-destination" element={<DetailDestination />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
