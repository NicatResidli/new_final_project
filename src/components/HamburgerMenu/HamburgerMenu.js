import './HamburgerMenu.css';
import closeIcon from '../../images/Close_icon.svg';
import closeIconBlack from '../../images/Close_icon_black.svg';
import { Link } from 'react-router-dom'

export default function HambergerMenu({
  isSignIn,
  onClickSignOut,
  onClickSignIn,
  inArticleRoute,
  username,
  onCloseMenu,
  logOutIconWhite,
  logOutIconBlack
}) {

  return (
    <section className='hamburger'>
      <nav className={`hamburger__nav
        ${inArticleRoute ? 'hamburger__nav_white' : ""}
          `}
      >
        <div className={`hamburger__nav_header
        ${inArticleRoute ? 'hamburger__nav_header_black' : ""}
          `}>
          <div className='hamburger__nav_container'>
            <h1 className='hamburger__title'>NewsExplorer</h1>
            <button className='hamburger__button-close'
              onClick={onCloseMenu}
            >
              <img className='hamburger__close-icon'
                src={inArticleRoute ? closeIconBlack : closeIcon}
                alt={inArticleRoute ? 'close-icon-black' : 'close-icon'}
              />
            </button>
          </div>
        </div>

        <ul className='hamburger__list'>
          <li className='hamburger__item'>
            <Link className={`hamburger__link hamburger__link_article
                        ${inArticleRoute ? 'hamburger__link_black' : ""}`
            }
              to='/'
            >
              Home
            </Link>
          </li>

          {isSignIn ?
            <>
              <li className={`hamburger__item
                        ${inArticleRoute ? 'hamburger__item_black hamburger__item_black-active' : ""}`}
              >
                <Link className={`hamburger__link hamburger__link_article
                        ${inArticleRoute ? 'hamburger__link_black' : ""}`
                }
                  to='/saved-news'
                >
                  Saved articles
                </Link>
              </li>
              <button
                className={`hamburger__button-signin hamburger__button-signin_login
                       ${inArticleRoute ? 'hamburger__button-signin_black' : ""}
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
              className="hamburger__button-signin"
              type='button'
              onClick={onClickSignIn}
            >
              Sign in
            </button>

          }
        </ul>

      </nav>
    </section >
  )



}
