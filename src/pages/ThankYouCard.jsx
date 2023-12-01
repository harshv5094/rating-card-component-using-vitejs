import { useContext } from 'react'
import Illustartion from '/illustration-thank-you.svg'
import { RatingContext } from '../App'

function ThankYou() {
  const { rating } = useContext(RatingContext)
  return (
    <div className="container">
      <div className="center">
        <img src={Illustartion} alt="Illustration Thank You Icon" />
        <section className="subline">You selected {rating} out of 5</section>
        <section className="title">Thank you!</section>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  )
}

export default ThankYou
