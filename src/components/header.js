import React from 'react';

const Header = ({signOut, navigateHome}) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand pointer" onClick={() => navigateHome('newsFeed')}>Reactibook</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active pointer">
          <a className="nav-link" onClick={() => navigateHome('newsFeed')}>Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item active pointer">
          <a className="nav-link" onClick={() => navigateHome('user')}>My Account</a>
        </li>
      </ul> 
        <button className="btn btn-success my-2 my-sm-0" type="button"
          onClick={() => signOut()}
        >Sign Out</button>
    </div>
  </nav>
)

export default Header;