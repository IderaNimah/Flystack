function Header(){
    return(
      <header>
      <div className="logo">
        <img src="./src/assets/Group 9.png" alt="logo" />
      </div>
      <div className="list">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">How it Works</a></li>
        <li><a href="#">Why Flystack</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Faq</a></li>
      </ul>
      </div>
      <div className="headerbutton">
      <button>Get Started</button>
      </div>
      </header>
    )
  }

export default Header;