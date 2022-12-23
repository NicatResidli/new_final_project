import './Preloader.css';
import notFoundIcon from '../../images/not-found_icon.svg';

export default function Preloader({
  hasResult
}) {

  return (

    <section className="preloader">
      {hasResult
        ?
        <div className='preloader__container'>
          <i className="preloader__icon"></i>
          <p className="preloader__text">
            Searching for news...
          </p>
        </div>
        :
        <div className='preloader__container preloader__container-notfound'>
          <img className="preloader__notfound"
            src={notFoundIcon}
            alt='preloader-not-found'
          />
          <h2 className='preloader__title'>
            Notthing found
          </h2>
          <p className="preloader__text">
            Sorry, but nothing matched your serach terms
          </p>
        </div>
      }
    </section>
  )
}
