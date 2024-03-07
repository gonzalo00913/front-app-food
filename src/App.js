import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
/* import About from "./components/About/About"; */
import HomePage from "./components/HomePage/HomePage";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form"
import Footer from "./components/Footer/Footer";

function App() {
  const { pathname } = useLocation();
  const hideNav = /* pathname === "/" || */ pathname.includes("/detail/") || pathname.includes("/About")  || pathname.includes("/form") ;

  return (
    <div>
{/*       <div>{!hideNav && <Nav />}</div> */}
      <Nav/>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
    {/*     <Route path="/About" element={<About />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
