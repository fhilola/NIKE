import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './ProductCorusel.scss'
import { Navigation } from 'swiper/modules';
import useFetch from '../../helpers/hooks/useFetch'
import { Product } from '../../types/ElementTypes.d';
import { Link } from 'react-router-dom';

const ProductCorusel = () => {
  const { data } = useFetch('/product/reel')
  const productCoruselData: Product[] = data
  return (
    <div className='product-carousel'>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        loop={true}
        spaceBetween={20}
        centeredSlides={true}
        slidesPerView={3.50}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {
          productCoruselData.map((product, index) =>
            <SwiperSlide>
              <div className="current-slide-index">{index + 1 + '/' + data.length}</div>
              <h5>{product.product_name}</h5>
              <Link to={`/product/${product._id}`}>
                <img src={product.product_images[0]} alt="" />
              </Link>
            </SwiperSlide>
          )
        }
      </Swiper>
    </div>
  )
}

export default ProductCorusel