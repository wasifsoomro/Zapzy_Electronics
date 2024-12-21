// src/app/productpage/page.tsx

import React from 'react';
import ProductDetail from './productdetail';
import Reviews from './review';
import { OtherProducts } from './likes';

const page = () => {
  return (
    <div>
      <ProductDetail id="1" /> {/* Example static ID */}
      <Reviews />
      <OtherProducts />
    </div>
  );
};

export default page;
