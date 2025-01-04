import Image from 'next/image';
import Link from 'next/link';

const DressStyleSection = () => {
  const styleCategories = [
    {
      title: 'Casual',
      image: '/casual-style.png',
      alt: 'Man wearing casual white t-shirt',
    },
    {
      title: 'Formal',
      image: '/formal-style.png',
      alt: 'Man in checkered formal blazer',
    },
    {
      title: 'Party',
      image: '/party-style.png',
      alt: 'Woman in sparkly party wear',
    },
    {
      title: 'Gym',
      image: '/gym-style.png',
      alt: 'Person working out in gym wear',
    },
  ];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 xl:px-28 py-12 bg-[#F0F0F0] rounded-lg">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 tracking-wide">
        BROWSE BY DRESS STYLE
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {styleCategories.map((category, index) => (
          <Link
            href={`/productpage/${category.title.toLowerCase()}`}
            key={index}
            className="relative overflow-hidden rounded-md bg-white shadow hover:shadow-lg transition-shadow"
          >
            <div className="relative h-56 sm:h-72 lg:h-80 xl:h-96">
              <Image
                src={category.image}
                alt={category.alt}
                width={700}
                height={600}
                className="object-cover w-full h-full"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <h3 className="absolute top-4 left-4 text-sm sm:text-lg font-semibold text-black bg-white bg-opacity-75 px-3 py-1 rounded">
                {category.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default DressStyleSection;