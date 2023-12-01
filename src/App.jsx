import { createContext, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ThankYou from './pages/ThankYouCard'
import PageNotFound from './pages/404'
import './App.css'

export const RatingContext = createContext()

function App() {
  const [rating, setRating] = useState(0)

  useEffect(() => console.log(rating), [rating])

  return (
    <RatingContext.Provider value={{ rating, setRating }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="thank-you" element={<ThankYou />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </RatingContext.Provider>
  )
}

export default App
