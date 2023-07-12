import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import HomePage from "./components/HomePage/HomePage";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form"

function App() {
  const { pathname } = useLocation();
  const hideNav = pathname === "/" || pathname.includes("/detail/") || pathname.includes("/About") /*  || pathname.includes("/Form") */ ;

  return (
    <div>
      <div>{!hideNav && <Nav />}</div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
