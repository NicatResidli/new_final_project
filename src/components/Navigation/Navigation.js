import "./Navigation.css";
import HambergerMenu from '../HamburgerMenu/HamburgerMenu';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logOutIconBlack from '../../images/logout_icon.svg';
import logOutIconWhite from '../../images/logout_icon_white.svg';
import hamburgerWhiteIcon from '../../images/hamburger_white.svg';
import hamburgerBlackIcon from '../../images/hamburger_black.svg';

export default function Navigation({
  onClickSignIn,
  onClickSignOut,
  isSignIn,
  username,
  inArticleRoute
}) {


  // for hamburger menu 
  const [isHamburgerMenu, setIsHamburgerMenu] = useState(false)

  const handleHamburgerMenu = () => {
    setIsHamburgerMenu(!isHamburgerMenu)
  }


  return (
    <nav
      className={`nav
              ${inArticleRoute ? 'nav_black' : ""}`}
    >
      {isHamburgerMenu ? <HambergerMenu
        onCloseMenu={handleHamburgerMenu}
        isSignIn={isSignIn}
        onClickSignOut={onClickSignOut}
        onClickSignIn={onClickSignIn}
        inArticleRoute={inArticleRoute}
        username={username}
        logOutIconBlack={logOutIconBlack}
        logOutIconWhite={logOutIconWhite}
      />
        :
        " "}
      <div className="nav__container">
        <p className="nav__name">NewsExplorer</p>
        <ul className="nav__lists">
          <li className={`nav__item
                        ${inArticleRoute ? 'nav__item_black' : "nav__item--active"}`}
          >
            <Link
              to='/'
              className={`nav__link nav__link_home
                        ${inArticleRoute ? 'nav__link_black' : ""}`
              }
            >
              Home
            </Link>
          </li>
          {
            isSignIn ?
              <>
                <li className={`nav__item
                        ${inArticleRoute ? 'nav__item_black nav__item_black--active' : ""}`}
                >
                  <Link className={`nav__link nav__link_article
                        ${inArticleRoute ? 'nav__link_black' : ""}`
                  }
                    to='/saved-news'
                  >
                    Saved articles
                  </Link>
                </li>
                <button
                  className={`nav__button-signin nav__button-signin_login
                        ${inArticleRoute ? 'nav__button-signin_black' : ""}
                        `}
                  type='button'
                  onClick={onClickSignOut}
                >
                  {username}
                  <img src={inArticleRoute ? logOutIconBlack : logOutIconWhite}
                    alt="logout-icon-white"
                  />
                </button>
              </>
              :
              <button
                className="nav__button-signin"
                type='button'
                onClick={onClickSignIn}
              >
                Sign in
              </button>
          }
          <li className='nav__item nav__item--hamburger'>
            <button className='nav__hamburger'
              onClick={handleHamburgerMenu}
            >
              <img className='nav__hamburger_icon'
                src={inArticleRoute ? hamburgerBlackIcon : hamburgerWhiteIcon}
                alt='hamburger-menu'
              />
            </button>
          </li>
        </ul>
      </div>
    </nav >
  )
}
