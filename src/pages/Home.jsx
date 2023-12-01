import { useContext } from 'react'
import { RatingContext } from '../App'
import IconStar from '/icon-star.svg'
import { NavLink } from 'react-router-dom'

function Home() {
  const data = [1, 2, 3, 4, 5]
  const { rating, setRating } = useContext(RatingContext)
  return (
    <div className="container">
      <img className="star-icon" src={IconStar} alt="icon-star" />
      <section className="title">How did we do?</section>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering.
      </p>

      <div className="rating">
        {data.map((item, index) => (
          <button
            key={index}
            className={`rating-btn ${rating === item ? 'active' : ''}`}
            onClick={() => {
              setRating(item)
            }}
          >
            {item}
          </button>
        ))}

        <NavLink to={`/thank-you`}>
          <button className="submit-button">Submit</button>
        </NavLink>
      </div>
    </div>
  )
}

export default Home
