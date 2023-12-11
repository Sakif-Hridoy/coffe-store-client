import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from "./components/CoffeeCard"

function App() {
  const coffees = useLoaderData();

  return (
    <>
    
      <h1>Total Coffees:{coffees.length}</h1>
      <div className='grid grid-cols-2'>
      {
        coffees.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
      }
      </div>
     
    </>
  )
}

export default App
