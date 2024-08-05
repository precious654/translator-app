import React from 'react'
import Card from './components/Card'
import Tabs from './components/Tabs'

export default function App() {
  return (
    <main className='container'>
      <div className='w-full flex justify-center mt-14 mb-10'>
      <img src="/logo.svg" alt="logo" className=''/>
      </div>

      <div className='w-full flex flex-col lg:flex-row gap-6'>
        <Card />
        <Card />
        
      </div>
      <Tabs />
    </main>
  )
}
