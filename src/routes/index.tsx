import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import TopNavigation from '../components/top-navigation/TopNavigation'

const RouteController = () => {
  return (
    <div>
      <TopNavigation/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            
        </Routes>
    </div>
  )
}

export default RouteController