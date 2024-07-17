import React from 'react'
import ProductItem from './ProductItem'

function ProductList({ productList }) {
  return (
    <div className='mt-10 px-4'>
      <h2 className="text-green-600 font-bold text-3xl text-center">
        Our Popular Products
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8'>
        {productList.map((product, index) => index < 8 && (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
