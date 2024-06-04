import "./App.css";
import Footer from "./components/Footer";

//Componenets
import Header from "./components/Header";
import Email from "./components/Email";

//Pages
import About from "./pages/About";
import Home from "./pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Email />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
