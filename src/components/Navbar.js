import React from 'react';

export default function Navbar(){
	function closeNav(){
		document.getElementById("myNav").style.width = "0%";
	}
	function openNav(){
		document.getElementById("myNav").style.width = "100%";
	}

	return (
		<nav className="navbar navbar-expand-lg custom_nav-container">
      <a className="navbar-brand" href="index.html">
        <img src="images/logo.png" alt="" /><span>
          Zezmon
        </span>
      </a>

      <div className="navbar-collapse" id="">
        <div className="container">
          <div className=" mr-auto flex-column flex-lg-row align-items-center">
            <ul className="navbar-nav justify-content-between ">
              <div className="d-none d-lg-flex">
                <li className="nav-item">
                  <a className="nav-link" href="fruit.html">
                    Customer Number : 01234567890</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="service.html">
                    Demo@gmail.com
                  </a>
                </li>
              </div>
              <div className=" d-none d-lg-flex">
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Login / Register
                  </a>
                </li>
                <form className="form-inline my-2 ml-5 mb-3 mb-lg-0">
                  <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                </form>
              </div>
            </ul>
          </div>
        </div>

        <div className="custom_menu-btn">
          <button onClick={openNav}></button>
        </div>
        <div id="myNav" className="overlay">
          <a href="" className="closebtn" onClick={closeNav}>&times;</a>
          <div className="overlay-content">
            <a href="index.html">HOME</a>
            <a href="product.html">PRODUCTS</a>
          </div>
        </div>
      </div>
    </nav>
	)
}