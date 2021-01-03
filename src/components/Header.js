import React from 'react';


const Header = () => {
  return (
    <header className="header">
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Taranaki Musicians </span>
          <span className="heading-primary--sub">Discover local talent</span>
        </h1>

        {/* <a href="#" class="btn btn--white btn--animated">Check out our musicians</a> */}
      </div>
    </header>
  )
}

export default Header;