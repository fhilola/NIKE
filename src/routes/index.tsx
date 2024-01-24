import React, { createRef, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import TopNavigation from '../components/top-navigation/TopNavigation'
import Navigation from '../components/navigation/Navigation'
import { Route as RouteType } from '../types/ElementTypes.d'
const RouteController = () => {
  const [dropdown, setDropdown] = useState<RouteType[] | null>(null)
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false)
  const mainElement = createRef<HTMLDivElement>()

  useEffect(()=>{
    if(mainElement.current){
      if(dropdown || isSearchActive){
        mainElement.current.style.filter = 'blur(5px)'
      }else{
        mainElement.current.style.filter = 'blur(0)'
      }
    }
  },[dropdown, isSearchActive])
  return (
    <div>
      <TopNavigation/>
      <Navigation dropdown={dropdown} setDropdown={setDropdown} isSearchActive={isSearchActive} setIsSearchActive={setIsSearchActive}/>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default RouteController