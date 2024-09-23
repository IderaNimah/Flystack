import "./App.css";
import Header from "./components/Header";
import SubHero from "./components/SubHero";
import Hero from "./components/Hero";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
function App() {
  return (  
    <>
    <Header/>
    <SubHero/>
    <Hero/>
    </>
  )
}

export default App

     