import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";


function Header(){
    return(
      <header>
      <div className="logo">
        <img src="./src/assets/Group 9.png" alt="logo" />
      </div>
      <div className="list">
       <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to ="/HowItWorks">How it Works</Link></li>
        <li><Link to ="/whyfly">Why Flystack</Link></li>
        <li><Link to ="/">Pricing</Link></li>
        <li><Link to ="/">Faq</Link></li>
      </ul>
      </nav>
      </div>
      <div className="headerbutton">
      <button>Get Started</button>
      </div>

      </header>
    )
  }

export default Header;

