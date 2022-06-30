import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";

import NavBar from "./components/navbar/NavBar";
import NavBar2 from "./components/navbar/NavBar2";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <NavBar2 />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
