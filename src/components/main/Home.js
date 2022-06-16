import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import useFetch from '../../network/services/useFetch';
import { Spin } from 'antd';

function Home() {
    const { data, isLoading } = useFetch('/products');
    const [homeProducts, setHomeProducts] = useState([])

    useEffect(() => {
        showHomeItems()
    }, [isLoading])
    

    const showHomeItems =async() => {
        setHomeProducts([])
        await data.forEach(product => {
            if (product.id % 10 == 0) {
                setHomeProducts(prev => [...prev, product])
            }
        });
        console.log(data)
    }


    return (
        <>
            <Carousel fade className='m-4'>
                <Carousel.Item>
                    <img
                        width={700} height={400}
                        className="d-block w-100 image-fluid"
                        src="https://res.cloudinary.com/dte7upwcr/image/upload/blog/blog/imagens-ecommerce.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width={700} height={400}
                        className="d-block w-100 image-fluid"
                        src="https://gro-ws.com/wp-content/uploads/2022/04/ozel-yazilim-e-ticaret.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width={700} height={400}
                        className="d-block w-100 image-fluid"
                        src="https://kozalog.com/wp-content/uploads/2020/12/eCommerce-1_670x441.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
           <Spin tip="loading..." spinning={isLoading}>
           <div className='row'>
                {homeProducts.map((product, key) => (
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
                        </Carousel>
                    </div>
                ))}
                </div>
                </Spin>
        </>
    )
}

export default Home