import './Header.css';
import Navigation from '../Navigation/Navigation'
import SearchForm from '../SearchForm/SearchForm'

export default function Header({
  onSearchUpdate,
  onClickSignIn,
  onClickSignOut,
  isSignIn,
  username,
  inArticleRoute
}) {

  return (
    <header className="header">
      <Navigation
        onClickSignIn={onClickSignIn}
        onClickSignOut={onClickSignOut}
        isSignIn={isSignIn}
        username={username}
        inArticleRoute={inArticleRoute}
      />
      <div className="header__container-content">
        <h1 className="header__quote">
          What's going on in the world?
        </h1>
        <p className="header__content">
          Find the latest news on any topic and save them in your personal account.
        </p>
        <SearchForm
          onSearchUpdate={onSearchUpdate}
        />

      </div>
    </header>
  )
}
