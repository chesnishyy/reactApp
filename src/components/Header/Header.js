import React from 'react';

const Header = () => {
  return (
      <div>
          <a href="/">Home</a>
          {" | "}
          <a href="/about">About</a>
          {" | "}
          <a href="/about/contact">Contact</a>
      </div>
  )
};

export default Header;