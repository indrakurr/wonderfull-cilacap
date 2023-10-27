import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import DetailDestination from "./pages/DetailDestination";
import LoginPage from "./pages/LoginPage";
import AddDestination from "./pages/AddDestination"
import ManageDestination from "./pages/ManageDestination";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail-destination" element={<DetailDestination />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/manage-destination" element={<ManageDestination />} />
          <Route path="/add-destination" element={<AddDestination />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
