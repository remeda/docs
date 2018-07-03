import * as React from 'react';

export function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Remeda
      </a>
      <ul className="navbar-nav">
        <li className="nav-item ">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Documentation
          </a>
        </li>
      </ul>
    </nav>
  );
}
