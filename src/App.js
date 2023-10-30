import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./routes/privateRoute";
import HomePage from "./pages/HomePage";
import DetailDestination from "./pages/DetailDestination";
import LoginPage from "./pages/LoginPage";
import AddDestination from "./pages/AddDestination";
import ManageDestination from "./pages/ManageDestination";
import EditDestination from "./pages/EditDestination";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail-destination/:id" element={<DetailDestination />}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/manage-destination" element={<ManageDestination />} />
            <Route path="/add-destination" element={<AddDestination />} />
            <Route path="/edit-destination/:id" element={<EditDestination />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
