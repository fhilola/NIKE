import React, { memo, useRef } from 'react'
import './Navigation.scss'
import Container from '../../utils/Utils'
import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import navdata from '../../db/navigation-data.json'
import { Route } from '../../types/ElementTypes.d'
import { FiSearch } from 'react-icons/fi'

const Navigation = ({dropdown, setDropdown, isSearchActive, setIsSearchActive}: {dropdown: Route[] | null, setDropdown: any,isSearchActive: boolean, setIsSearchActive: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const searchPanel = useRef<HTMLDivElement | null>(null)
  return (
    <nav className='navigation'>
      <Container>
        <div className="navigation__wrapper">
          <Link to='/' className='navigation__logo'>
            <img src={Logo} alt="" />
          </Link>
          <ul className='navigation__list'>
            {
              navdata.map((navitem, index)=>
              <li key={index} onMouseOver={()=>setDropdown(navitem.sub_routes)} onMouseLeave={()=>setDropdown(null)}>
                <Link to={navitem.link}>{navitem.title}</Link>
                {
                  dropdown &&
                  <div className="navigation__dropdown">
                    <div className="dropdown__wrapper">
                      {
                        dropdown?.map(subroute => 
                        <div className="sub-route-list">
                          <h2>{subroute.sub_title}</h2>
                          <ul className='navigation__list'>
                            {
                              subroute.sub_links?.map(sublink =>
                              <li>
                                <Link to={sublink.link}>{sublink.sub_link_title}</Link>
                              </li>
                              )
                            }
                          </ul>
                        </div>
                        )
                      }
                    </div>
                  </div>
                }
              </li>
              )
            }
          </ul>
          <div className="navigation__actions">
            <div className={`search-panel ${isSearchActive ? 'search-panel--active' : ''}`}>
              <img src={Logo} alt="" />
              <div className="search">
                <div ref={searchPanel} className='search__wrapper'>
                  <button className='search-icon' onClick={()=>setIsSearchActive(true)}>
                    <FiSearch/>
                  </button>
                  <input type="text" placeholder='Search' className='search__input'/>
                </div>
                <div className="search__sugesstion">
                  <p className="suggestion__label">Popular Search Terms</p>
                  <ul className="suggestion__list">
                    <li className='suggestion__list-item'>
                      <a href="/">Air Force 1</a>
                    </li>
                    <li className='suggestion__list-item'>
                      <a href="/">Jordan</a>
                    </li>
                    <li className='suggestion__list-item'>
                      <a href="/">Air Max</a>
                    </li>
                    <li className='suggestion__list-item'>
                      <a href="/">Blazer</a>
                    </li>
                  </ul>
                </div>
              </div>
              <button className='cancel-search' onClick={()=>{
                setIsSearchActive(false)
                searchPanel.current?.classList.add("search__wrapper--inactive")
              }}>Cancel</button>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default memo(Navigation)