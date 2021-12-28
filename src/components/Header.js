import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>BookSHORE</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Available Books
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add New Book
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
