import './SavedNewsHeader.css';
import Card from '../Card/Card';
import Preloader from '../Preloader/Preloader';
import { useState, useEffect } from 'react';

export default function SavedNewsHeader({
  username,
  inSavedNews,
}) {

  const [savedCards, setSavedCards] = useState([])

  useEffect(() => {
    setSavedCards(JSON.parse(localStorage.getItem('savedCards')))
  }, [])
  console.log(savedCards)

  // for delete saved news 
  const handleDeleteCardClick = (card) => {
    const index = savedCards.indexOf(card)
    console.log(savedCards)
    savedCards.splice(index, 1)
    localStorage.setItem('savedCards', JSON.stringify(savedCards))
    setSavedCards(JSON.parse(localStorage.getItem('savedCards')))
  }

  // find the unique keyword from saved news return list of unique keyword
  const findUniqueKeyword = (cards) => {
    const keywords = []
    for (let i = 0; i < cards.length; i++) {
      keywords.push(cards[i].keyword)
    }
    let unique = [...new Set(keywords)];
    return unique
  }


  // show span how many keyword user have 
  const listSpanKeyword = () => {
    const unique = findUniqueKeyword(savedCards)
    if (unique.length <= 2) {
      if (unique.length === 0) {
        return ' Not found any saved news'
      }
      if (unique.length === 1) {
        return ` ${unique[0]}`
      }
      if (unique.length === 2) {
        return ` ${unique[0]}, ${unique[1]} `
      }
    }
    else {
      return ` ${unique[0]}, ${unique[1]} and ${unique.length - 2} `
    }
  }


  return (
    <>
      <section className='saved_news'>
        <div className='saved_news__container'>
          <header className='saved_news__header'>
            <p className='saved_news__title'>
              Saved article
            </p>
            <h2 className='saved_news__info'>
              {`${username}, you have ${savedCards.length} saved articles`}
            </h2>
            <p className='saved_news__keyword'>
              By keywords:
              <span className='saved_news__bold'>
                {listSpanKeyword()}
              </span>
            </p>
          </header>
        </div>
        <main className="saved_news__main">
          {savedCards.length > 0
            ?
            < div className='saved_news__container saved_news__container-main'>
              {savedCards.map((card) => {
                return (
                  <Card
                    card={card}
                    inSavedNews={inSavedNews}
                    onDeleteClick={handleDeleteCardClick}
                  />
                )
              })}
            </div>
            :
            <div className='saved_news__container saved_news__container-height'>
              <Preloader
                hasResult={false}
              />
            </div>
          }
        </main>
      </section>
    </>
  )
} 
