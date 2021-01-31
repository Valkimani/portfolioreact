import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="./index.html">Valentine Kimani</a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <aside className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
         <li className="nav-item">
          <a className="nav-link" href="index.html">About</a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="portfolio.html">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="links.html">Links</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="contact.html">Contacts</a>
        </li>
      </ul>
      </aside>
  </nav>
    );
};

export default Navbar;