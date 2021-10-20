import logo from "../assets/imgs/logo.svg";

export  function Navbar() {
    return (
        <div className="nav flex align-center">
            <a href="#" className="logo">
              <img  alt="logo" src={logo}/>
            </a>
          <nav className="flex">
            <a href="#">home</a>
            <a href="#">about</a>
          </nav>
          <button className="contact-btn">contact us</button>
        </div>
    )
}
