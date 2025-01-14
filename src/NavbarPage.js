
import React from 'react'
import PropTypes from 'prop-types';

function NavbarPage(props) {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg  bg-primary fixed-top">
          <div className="container-fluid ">
             <a className="navbar-brand" href="/">
              <img src="logo192.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
              {props.title}
            </a>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">{props.text}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">{props.about}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">{props.link}</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {props.dropdown}
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">Action</a></li>
                    <li><a className="dropdown-item" href="/">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                  </ul>
                </li>
                
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success text-dark" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

NavbarPage.propTypes = {
  title : PropTypes.number,
  text : PropTypes.string.isRequired,
  about : PropTypes.string
}
NavbarPage.defaultProps = {
  title : "set title here",
 };


export default NavbarPage;








