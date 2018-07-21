import * as React from 'react';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        Remeda
      </NavLink>
      <ul className="navbar-nav">
        <li className="nav-item ">
          <NavLink className="nav-link" to="/" exact>
            Home
          </NavLink>
        </li>
        <li className="nav-item  ">
          <NavLink className="nav-link" to="/docs" activeClassName="active">
            Documentation
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
