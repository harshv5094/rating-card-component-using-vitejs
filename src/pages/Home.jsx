import { useContext } from 'react'
import { RatingContext } from '../App'
import IconStar from '../../public/icon-star.svg'

function Home() {
  const data = [1, 2, 3, 4, 5]
  const { rating, setRating } = useContext(RatingContext)
  return (
    <div className="container">
      <div className="icon-star">
        <img src={IconStar} alt="icon-star" />
      </div>
    </div>
  )
}

export default Home
