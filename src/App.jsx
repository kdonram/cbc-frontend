import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/productCard'
import UserData from './components/userData'  

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkGMb0MAvK8P35tmFYeA56A-9R6Nd5cQNCfA&s" name="Laptop" price="$99.99" />
      <br />
      <ProductCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlKl28AkOioHp5Da87alIOxialChITuJC6JQ&s" name="iphone16" price="$299.99" />
    </>
  )
}

export default App
