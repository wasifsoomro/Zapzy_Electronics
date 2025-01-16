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
    <div className="flex items-center justify-center min-h-screen bg-white px-4 py-8">
  <div className="bg-gray-100 p-8 rounded-3xl shadow-lg w-5/6 md:w-3/4 lg:w-5/6">
    <h2 className="text-xl font-bold text-center mb-6">
      BROWSE BY DRESS STYLE
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {styleCategories.map((category) => (
       <Link href="/productpage" key={category.title}>
        <div
          className="relative bg-white rounded-lg overflow-hidden shadow-md h-44"
        >
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-2 left-2 text-black font-semibold bg-white/80 px-2 py-1 rounded">
            {category.title}
          </span>
        </div>
       </Link>
      ))}
    </div>
  </div>
</div>

  );
};

export default DressStyleSection;