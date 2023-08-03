import React from 'react';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function Navbar() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <a className="navbar-brand" href="#">
            Buletin
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Stories <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Creator
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Community
                </a>
              </li>

              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Subscribe
                </a>
              </li>
            </ul>

            <h6 className="nav-item active">📝 Write  </h6>
            <h6 className="nav-item active"> <NotificationsNoneIcon sx={{ marginLeft: 6 }} /></h6>

          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
