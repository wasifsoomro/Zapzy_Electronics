// components/NewArrivals.tsx
import ProductCard from './ProductCard';
import Link from 'next/link';

const NewArrivals = () => {
  const products = [
    {
      image: '/t-shirt-tape.png',
      title: 'T-shirt with Tape Details',
      rating: 4.5,
      reviews: 456,
      price: 120,
    },
    {
      image: '/skinny-jeans.png',
      title: 'Skinny Fit Jeans',
      rating: 4.3,
      reviews: 386,
      price: 240,
      originalPrice: 260,
      discount: 30,
    },
    {
      image: '/checkered-shirt.png',
      title: 'Checkered Shirt',
      rating: 4.5,
      reviews: 456,
      price: 180,
    },
    {
      image: '/striped-tshirt.png',
      title: 'Sleeve Striped T-shirt',
      rating: 4.5,
      reviews: 456,
      price: 130,
      originalPrice: 160,
      discount: 30,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 id="new-arrivals" className="text-3xl font-bold text-center mb-8">NEW ARRIVALS</h2>
      
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

export default NewArrivals;