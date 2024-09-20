import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Hero from './Hero.jsx'
// ..

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero/>
      
    </>
  )
}

export default App
