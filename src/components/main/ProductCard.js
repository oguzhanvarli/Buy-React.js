import { maxWidth } from '@mui/system'
import React from 'react'
import { Carousel } from 'react-bootstrap'

function ProductCard(props) {
    const { product } = props
    return (
        <div className='col-md-3 col-sm-4 m-4 ' >
            <Carousel fade className='m-2' interval={null}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={product.images[1]}
                        width={300} height={250}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h6 className='product-title'>{product.title}</h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={product.images[2]}
                        width={300} height={250}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h6 className='product-title'>{product.title}</h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={product.images[3]}
                        width={300} height={250}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h6 className='product-title'>{product.title}</h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={product.images[4]}
                        width={300} height={250}
                        alt="Forth slide"
                    />
                    <Carousel.Caption>
                    <h6 className='product-title'>{product.title}</h6>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-primary'>Add To Card</button>
            </div>
        </div>
    )
}

export default ProductCard