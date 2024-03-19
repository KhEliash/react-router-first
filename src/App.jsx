 
 
import './App.css'
import Charts from './Components/Charts/Charts'
import Navbar from './Components/Navbar/Navbar'
import PricingOptions from './Components/PricingOptions/PricingOptions'

function App() {
 

  return (
    <>
      <Navbar></Navbar>
      <h1 className='text-7xl bg-red-600'>Vite + React</h1>
     <PricingOptions></PricingOptions>
      <Charts></Charts>
    </>
  )
}

export default App
