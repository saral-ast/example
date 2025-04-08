import { useState } from 'react'
import './App.css'
import Great from './components/Great'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import WelcomeMessage from './components/WelcomeMessage'
import JsxRules from './components/JsxRules'
import ProductInfo from './components/ProductInfo'
import ProductList from './components/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      {/* <MainContent/>
      <WelcomeMessage/>
      <Great/>
      <JsxRules/> */}
      <Great/>
      <ProductList/>
      {/* <ProductInfo name="Laptop" price={1000}/> */}
      {/* <ProductInfo/> */}
      <Footer/>
    </>
  )
}

export default App
