import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Anfitrion from "./pages/Anfitrion";

function App() {
  return (
    <div className="">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/anfitrion" element={<Anfitrion />} />
            <Route path="/participante" element={<Anfitrion />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
