import { forwardRef, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../helpers/hooks/useFetch'
import { Product as ProductType, ProductVariant } from '../../types/ElementTypes.d';
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import './Product.scss'
import { NavigationBnts } from '../../utils/Utils';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { addToCart, removeFromCart } from '../../redux/features/cartSlices';

const Product = forwardRef<HTMLDivElement>((props, mainElement) => {
    console.log(props);
    const dispatch = useDispatch()
    const { id } = useParams()
    const { data } = useFetch(`/product/${id}`)
    const productData: ProductType = data[0]
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [currentVariant, setCurrentVariant] = useState<ProductVariant>()
    const {cart} = useSelector((state: RootState ) => state.certRoot)
    console.log(cart);

    const handleAddToCart = (product : ProductType) : void => {
        if(currentVariant){
            let p = {...product}
            p = {...p, count: 1, selectedVariant: currentVariant}
            dispatch(addToCart(p))
        }
        else{
            console.log('Please select the variant');
        }
    }

    const handleRemoveFromCart = (product : ProductType) : void=>{
        if(currentVariant){
      let p = {...product};
      p = {...p, selectedVariant: currentVariant};
      dispatch(removeFromCart(p))
    }
    else{
      console.log("Please select the variant");
    }
    }
    useEffect(()=>{
        setCurrentVariant(productData?.variants[0])
    },[productData])
    return (
        <div ref={mainElement} className='single-product'>
            <div className="single-product-container">
                {
                    productData &&
                    <div className="single-corusel">
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >
                            {
                                productData.product_images.map((img, index) =>
                                    <SwiperSlide key={index}>
                                        <img src={img} alt="" />
                                    </SwiperSlide>
                                )
                            }
                        </Swiper>
                        <div className="single-corusel__main">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Thumbs]}
                                className="mySwiper2"
                            >
                                <NavigationBnts/>
                                {
                                    productData.product_images.map((img, index)=>
                                    <SwiperSlide key={index}>
                                        <img className='swiper-main-image' src={img} alt="" />
                                    </SwiperSlide>
                                    )
                                }
                            </Swiper>
                        </div>
                        <div className="product-actions">
                            <h1>{productData.product_name}</h1>
                            <p>{productData.product_name}</p>
                            <div className="variants">
                                <h5>{productData.variants[0].variant_type}</h5>
                                <div className="variants__wrapper">
                                    {
                                        productData?.variants.map((variant, index)=>
                                        <div key={index} onClick={()=>setCurrentVariant(variant)} className={`product-variant product-variant${currentVariant?.variant_value === variant.variant_value ? '--active' : ''}`}>{variant.variant_value}</div>
                                        )
                                    }
                                </div>
                            </div>
                            {
                                cart.findIndex((product)=> product._id === productData._id && product.selectedVariant.variant_value === currentVariant?.variant_value) === -1 ?
                                <button className='add-to-cart__btn' disabled={!productData} onClick={()=>handleAddToCart(productData)}>Add to Cart</button>
                                :
                                <div className='add-to-cart__wrapper'>
                                    <button onClick={()=>handleRemoveFromCart(productData)}>-</button>
                                    {
                                        cart.find((product) => product._id === productData._id && product.selectedVariant.variant_value === currentVariant?.variant_value)?.count
                                    }
                                    <button onClick={()=>handleAddToCart(productData)}>+</button>
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
})

export default Product


// {
//                                 cart?.findIndex((product)=> product._id === productData._id && product.selectedVariant.variant_value === productData.selectedVariant.variant_value) === -1 ?
//                                 
//                                 :
//                                 <div className="add-to-cart__wrapper">
//                                     {/* <button onClick={() => handleRemoveFromCart(productData)} className="link">-</button> */}
//                                     {cart.find((product) => product._id === productData._id && product.selectedVariant.variant_value === currentVariant?.variant_value)?.count}
//                                     <button className="link" onClick={() => handleAddToCart(productData)}>+</button>
//                                 </div>
//                             }
                            

// CRP => The Critical Rendering Path is the sequence of steps the browser goes through to convert the HTML, CSS, and JavaScript into pixels on the screen.The Critical Rendering Path is the sequence of steps the browser goes through to convert the HTML, CSS, and JavaScript into pixels on the screen. Optimizing the critical render path improves render performance. The critical rendering path includes the Document Object Model (DOM), CSS Object Model (CSSOM), render tree and layout.The document object model is created as the HTML is parsed. The HTML may request JavaScript, which may, in turn, alter the DOM. The HTML includes or makes requests for styles, which in turn builds the CSS object model. The browser engine combines the two to create the Render Tree. Layout determines the size and location of everything on the page. Once layout is determined, pixels are painted to the screen. Optimizing the critical rendering path improves the time to first render. Understanding and optimizing the critical rendering path is important to ensure reflows and repaints can happen at 60 frames per second, to ensure performant user interactions, and to avoid jank.