import {Link} from "react-router-dom";

function Header(){
    return(
      <header>
      <div className="logo">
        <img src="./src/assets/Group 9.png" alt="logo" />
      </div>
      <div className="list">
      <ul>
        <li><Link to ="/HowItWorks">Home</Link></li>
        <li><Link to ="/">How it Works</Link></li>
        <li><Link to ="/">Why Flystack</Link></li>
        <li><Link to ="/">Pricing</Link></li>
        <li><Link to ="/">Faq</Link></li>
      </ul>
      </div>
      <div className="headerbutton">
      <button>Get Started</button>
      </div>
      </header>
    )
  }

export default Header;