import './Main.css';
import Card from '../Card/Card.js';
import { useState, useEffect } from 'react';

export default function Main({
  cards,
  inSavedNews,
  onSaveClick,
  onDeleteClick,
  showMore,
  handleShowMoreClick,
  isSignIn,
  onSignInNeededClick
}) {

  return (
    <section className="main">
      <div className='main__container'>
        <h2 className='main__heading'>
          Search result
        </h2>
        <ul className='main__cards'>
          {cards.slice(0, showMore).map((card, index) => {
            return (
              <li key={index} className='main__card'>
                <Card
                  isSignIn={isSignIn}
                  card={card}
                  inSavedNews={inSavedNews}
                  onSaveClick={onSaveClick}
                  onDeleteClick={onDeleteClick}
                  isSaved={false}
                  onSignInNeededClick={onSignInNeededClick}
                />
              </li>
            )
          })}

        </ul>
        {showMore <= 100 &&
          <button
            className='main__more-button'
            onClick={handleShowMoreClick}
          >
            Show more
          </button>
        }
      </div>
    </section>
  )
}
