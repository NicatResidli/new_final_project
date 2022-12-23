import './About.css'
import aboutImg from '../../images/about.JPG'
export default function About() {

  return (
    <section className="about">
      <img
        className='about__img'
        alt="about"
        src={aboutImg}
      />
      <div className='about__container'>
        <h1 className="about__heading">
          About the author
        </h1>
        <p className="about__content">
          This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know.
          You can also talk about your experience with Practicum, what you learned there, and how you can help potential customers.
        </p>
      </div>

    </section>
  )
}
