import { Routes, Route } from "react-router-dom";
import BackGround from "./components/BackGround";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import APOD from "./pages/apod/APOD";
import Home from "./pages/home/Home";
import Impressum from "./pages/impressum/Impressum";

function App() {
  return (
    <>
      <NavBar />
      <BackGround>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/apod" element={<APOD />} />
        </Routes>
      </BackGround>

      <Footer />
    </>
  );
}

export default App;
