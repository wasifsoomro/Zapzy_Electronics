import React from 'react'
import ProductPage from './productdetail'
import Reviews from './review'
import { OtherProducts } from './likes'

const page = () => {
  return (
    <div>
      <ProductPage />
      <Reviews />
      <OtherProducts />
    </div>
  )
}

export default page
