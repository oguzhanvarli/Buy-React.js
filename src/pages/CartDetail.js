import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd'
function CartDetail() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cartItems)
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
      dataIndex: `price`,
      key: 'price',
    },
  ];
  return (
    <div className='row'>
      <div className='col-md-8'>
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col"></th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Brand</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>

            {cart.map((item, key) => (
              <tr key={key}>
                <th scope="row" className=''>{key + 1}</th>
                <td><img width={80} src={`${item.images[1]}`} /></td>
                <td>{item.title}</td>
                <td>{item.brand}</td>
                <td>{item.brand}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>

      </div>
    </div>
  )
}

export default CartDetail