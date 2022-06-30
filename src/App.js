import { Route, Routes, Navigate } from "react-router-dom";
import Auth from "./components/Auth";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

function App() {
  const isLogIn = localStorage.getItem("accessToken") ? true : false;
  return (
    <Routes>
      <Route path="/" element={<Page1 />} />
      {!isLogIn && <Route path="/login" element={<Auth />} />}
      <Route path="/building/:buildingId" element={<Page2 />} />
      <Route path="/floor/:buildingId/:floorId" exact element={<Page3 />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
