import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import categoryImg from '../../assets/category.jpg'
import categoryVideo from '../../assets/nike-com.mp4'
import './Category.scss'

const Category = () => {
    const videoRef = useRef()
    useEffect(()=>{
        videoRef.current.playbackRate = 0.7
    },[])
  return (
    <div className='category'>
        <div className="category-item">
            <Link to="/"className='category-link'>
                    <img src={categoryImg} alt="" />
                    <div className="category-content">
                        <p>Trending now</p>
                        <h4>The latest Air Force One's</h4>
                        <p className="link">Shop</p>
                    </div>
                </Link>
        </div>
        <div className="category-item">
            <Link to='/'className='category-link'>
                <video mooted loop autoPlay ref={videoRef} src={categoryVideo}></video>
                <div className="category-content">
                    <p>Invincible 3</p>
                    <h4>Take Cushion for Run</h4>
                    <p className="link link--light">Shop</p>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Category