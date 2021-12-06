import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/painting" className="nav-links" onClick={closeMobileMenu}>
                PAINTING
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/installation" className="nav-links" onClick={closeMobileMenu}>
                INSTALLATION
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/repair" className="nav-links" onClick={closeMobileMenu}>
                REPAIR
              </Link>
            </li>

            <li>
              <Link to="/contact" className="nav-links-mobile" onClick={closeMobileMenu}>
                CONTACT
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">CONTACT</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
