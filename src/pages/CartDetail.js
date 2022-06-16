import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Table} from 'antd'
function CartDetail() {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const columns = [
        {
            title: 'Image',
          dataIndex: 'images',
          render: (t, r) => <img width={200} src={`${r.images[1]}`} />
          },
          {
          title: 'Name',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'Brand',
          dataIndex: 'brand',
          key: 'brand',
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        },
      ];
  return (
    <div>
        <Table dataSource={cart.cartItems} columns={columns} className='table table-striped'/>;
    </div>
  )
}

export default CartDetail