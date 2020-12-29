import React from 'react';
import { Link } from "react-router-dom";



class Header extends React.Component {
  logOut =()=>{
    localStorage.removeItem("token");
    this.props.history.push("/login");
  }
  
  render(){
  const {token} = this.props;
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/blog">Blog</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/contact-us">Contact Us</Link>
                </li>
              </ul>

              <ul className={"nav ml-auto"}>
                <li className="nav-item ml-auto">
                  {!token ? <Link className="nav-link active" to="/login">Login</Link>  : <span className="nav-link cursor-pointer" onClick={()=>this.logOut()}>Logout</span> 
                  }
                </li>
              </ul>
            </div>
          </div>
      </nav>
  );
  }
}

export default Header;
