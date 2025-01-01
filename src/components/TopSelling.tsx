// components/NewArrivals.tsx
import ProductCard from './ProductCard';
import Link from 'next/link';

const TopSelling = () => {
  const products = [
    {
      image: '/vertical-shirt.png',
      title: 'Vertical Striped Shirt',
      rating: 5,
      reviews: 456,
      price: 212,
      originalPrice: 232,
      discount: 20,
    },
    {
      image: '/courage-shirt.png',
      title: 'Courage Graphic T-Shirt',
      rating: 4,
      reviews: 386,
      price: 145,
      
    },
    {
      image: '/short.png',
      title: 'Loose Fit Bermuda Shorts',
      rating: 3.5,
      reviews: 456,
      price: 80,
    },
    {
      image: '/faded-jeans.png',
      title: 'Faded Skinny Jeans',
      rating: 4.5,
      reviews: 456,
      price: 210,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 id="on-sale" className="text-3xl font-bold text-center mb-8">Top Selling</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
        <div className='flex justify-center'>
      <div className="text-center mt-8 bg-slate-100 flex items-center justify-center shadow-lg py-2 w-24 rounded-lg">
        <button className="text-gray-600 hover:text-gray-900 font-medium">
        <Link href="/productpage" title="product page"> View All </Link>
        </button>
      </div>
        </div>
    </section>
  );
};

export default TopSelling;