import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';  // Font Awesome icons from React Icons


function Header(){

  const [isOpen, setIsOpen] = useState(false); // State to handle the toggle for the menu

  // Function to toggle the menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return(
      <header>
      <div className="logo">
        <img src="./assets/logo.png" alt="logo" />
      </div>
      <div className="list">
       <nav>
      <ul className={isOpen ? 'open' : ''}>
        <li><Link to="/">Home</Link></li>
        <li><Link to ="/HowItWorks">How it Works</Link></li>
        <li><Link to ="/whyfly">Why Flystack</Link></li>
        <li><Link to ="/">Pricing</Link></li>
        <li><Link to ="/">Faq</Link></li>
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={40} color="white" /> : <FaBars size={30} color="white" />}
      </div>
      </nav>
      </div>
      <div className="headerbutton">
      <button>Get Started</button>
      </div>

      </header>
    )
  }

export default Header;

