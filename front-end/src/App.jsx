import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
 
  useEffect(()=>{
    async function getData(){
      try{
      const response = await fetch('http://localhost:8080')
      const data = await response.json()
      console.log(data)
      }catch(e){
      console.log(e)

     }
    }
    getData()
  },[])

  return (
    <>
      Hello(from frontend)
    </>
  )
}

export default App
