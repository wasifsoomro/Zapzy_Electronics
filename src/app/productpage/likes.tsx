import ProductCard from "@/components/ProductCard";

export const OtherProducts = () => {
    const products = [
      {
        image: '/polo-shirt.png',
        title: 'Polo with Contrast Trims',
        rating: 5,
        reviews: 456,   
        price: 212,
        originalPrice: 232,
        discount: 20,
      },
      {
        image: '/gradient-tshirt.png',
        title: 'Gradient Graphic T-shirt',
        rating: 4,
        reviews: 386,
        price: 145,
        
      },
      {
        image: '/polo-tapping.png',
        title: 'Polo with Tipping Details',
        rating: 3.5,
        reviews: 456,
        price: 80,
      },
      {
        image: '/black-stripped.png',
        title: 'Black Striped T-shirt',
        rating: 4.5,
        reviews: 456,
        price: 210,
      },
    ];
  
    return (
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Top Selling</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>
    );
  };
  