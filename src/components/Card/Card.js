import './Card.css';
import { useState } from 'react';

export default function Card({
  card,
  onSaveClick,
  inSavedNews,
  onDeleteClick,
  isSignIn,
  onSignInNeededClick
}) {

  const [isSaved, setIsSaved] = useState()

  const handleSaveClick = async () => {
    await onSaveClick(card)
    setIsSaved(!isSaved)

  }

  const handleDeleteClick = () => {
    onDeleteClick(card)
  }


  const formattedDate = (card) => {
    const cardDate = card.publishedAt;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const noTime = cardDate.slice(0, 10);
    const date = new Date(noTime);
    const formatDate = `${months[date.getMonth()]} ${date.getDate()},  ${date.getFullYear()}`;
    return formatDate;
  };

  const handleSignInNeededClick = () => {
    onSignInNeededClick(card)
  }


  return (
    <div className='card'>
      {inSavedNews ?
        <>
          <span className='card__keyword'>
            {card.keyword}
          </span>
          <button className="card__delete-button"
            onClick={handleDeleteClick}
          >
          </button>
        </>
        :
        isSignIn ?
          isSaved ?
            <button className="card__save-button_marked"
            >
            </button>
            :
            <>
              <button className="card__save-button"
                onClick={handleSaveClick}
              >
              </button>
            </>
          :
          <>

            <button className="card__save-button card__save-button_signin"
              onClick={handleSignInNeededClick}
            >
              <span className='card__signin' >
                Sign in to save articles
              </span>
            </button>
          </>
      }
      <img
        alt={card.title}
        src={card.urlToImage}
        className="card__img"
      />
      <div className="card__content-box">
        <p className="card__date">
          {formattedDate(card)}
        </p>
        <h2 className="card__title">
          <a href={card.url} className="card__title_link" target="_blank" rel="noreferrer">
            {card.title}
          </a>
        </h2>
        <p className="card__content">
          {card.description}
        </p>
        <p className="card__source">
          {card.source.name}
        </p>
      </div>
    </div>
  )
}
