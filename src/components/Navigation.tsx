import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'

const Nav = () => {
  return (
    <nav>
      <div>
        <Link to="/main">
          Home
        </Link>
      </div>
      <div>
        <Link to="/counter">
          Counter
        </Link>
      </div>
      <div>
        <Link to="/search">
          Search
        </Link>
      </div>
      <div>
        <Link to="/mypage">
          MyPage
        </Link>
      </div>
    </nav>
  );
};

export default Nav;