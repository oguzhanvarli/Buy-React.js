import React, { useEffect, useRef, useState } from 'react'
import useFetch from '../network/services/useFetch'
import { Layout } from 'antd';
import { Carousel, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { increment } from '../store/slices/cartSlice'
import Home from '../components/main/Home';

function Main() {
  const { Sider } = Layout;
  const { data,isLoading } = useFetch('/products');
  const dispatch = useDispatch()
  const [categoryList, setCategoryList] = useState([])
  const [refresh, setRefresh] = useState(true)
  const [products, setProducts] = useState([])
  const changeMainPage = useRef(null);

  useEffect(() => {
    getCategories()
  }, [isLoading])

  const getCategories = async () => {
    await setCategoryList([...new Set(data.map(item => item.category))]);
    setRefresh(prev => !prev)
  }

  const sendCategory = async (cat) => {
    changeMainPage.current.style.display = "none"
    setProducts([])
    await data.forEach(product => {
      if (product.category === cat) {
        setProducts(prev => [...prev, product])
      }
    });
  }


  return (
    <>
      <div className='row'>
        <Sider
          className='slide-design col-2 col-md-3'
        >
          {categoryList.map((cat, key) => (
            <Button key={key} onClick={() => sendCategory(cat)} variant="dark" className='d-block my-3 btn-add w-100'>{cat}</Button>
          ))}

        </Sider>
        <div ref={changeMainPage} className='col-md-9'>
          <Home />
        </div>
        
          <div className='col-md-9 row justify-content-around'>
            {products.map((product, key) => (
              <div className='col-md-3 col-sm-4 m-4 ' >
                <Carousel fade className='m-2 shadow' interval={null} key={key}>
                  <Carousel.Item>
                    <img
                      className="d-block slider-image-container"
                      src={product.images[1]}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h6 className='product-title'>{product.title}</h6>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block slider-image-container"
                      src={product.images[2]}
                      alt="Second slide"
                    />
                    <Carousel.Caption>
                      <h6 className='product-title'>{product.title}</h6>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block slider-image-container"
                      src={product.images[3]}
                      alt="Third slide"
                    />
                    <Carousel.Caption>
                      <h6 className='product-title'>{product.title}</h6>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
                <div className='d-flex justify-content-around'>
                  <h5 className='fw-bold mt-1'>{product.price} TL</h5>
                  <button className='btn btn-add' onClick={() => dispatch(increment(product))}>Add To Card</button>
                </div>
              </div>
            ))}
          </div>
      
      </div>
    </>
  )
}

export default Main