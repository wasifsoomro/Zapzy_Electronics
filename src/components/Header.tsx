"use client";
import { UserButton, useUser, SignInButton, SignedIn, SignedOut} from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";

// Product type for TypeScript
interface Product {
  id: number;
  name: string;
  category: string;
}

const Header = () => {
  const [isPromoOpen, setIsPromoOpen] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controls hamburger menu
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Search query
  const [searchResults, setSearchResults] = useState<Product[]>([]); // Search results

  const { user, isSignedIn } = useUser(); // Clerk hook for user data; // Clerk hook to sign out

  const handleProfileClick = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogout = () => {
    // Sign out with Clerk
    setIsProfileMenuOpen(false);
  };

  const handleSearchChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.length > 2) {
      // Fetch data from API only if the search query is longer than 2 characters
      const response = await fetch(`/api/products?search=${query}`);
      const data = await response.json();
      setSearchResults(data); // Set search results
    } else {
      setSearchResults([]); // Clear results if query is too short
    }
  };

  const handleProductClick = () => {
    setSearchQuery(""); // Clear search query
    setSearchResults([]); // Hide search results after clicking a product
  };

  return (
    <header className="w-full relative z-20">
      {isPromoOpen && (
        <div className="relative bg-black text-white text-center py-2 text-sm">
          <p>
            Sign up and get 20% off your first order.
            <Link href="/signup" className="underline ml-1">
              Sign Up Now
            </Link>
          </p>
          <button
            onClick={() => setIsPromoOpen(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
          >
            ×
          </button>
        </div>
      )}

      {/* Main Navigation */}
      <nav className="flex items-center justify-between px-4 py-4 border-b relative md:gap-2 lg:gap-4">
        {/* Hamburger Menu Button */}
        <div className="flex items-center">
          <button
            className="md:hidden block focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className="text-xl font-bold sm:ml-4 md:ml-0">
            SHOP.CO
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg z-20 md:hidden">
            <ul className="flex flex-col">
              <li>
                <Link
                  href="/productpage"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)} // Close menu after navigation
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="#on-sale"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)} // Close menu after navigation
                >
                  On Sale
                </Link>
              </li>
              <li>
                <Link
                  href="#new-arrivals"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)} // Close menu after navigation
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="#brands"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)} // Close menu after navigation
                >
                  Brands
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/productpage" className="hover:text-gray-600">
            Shop
          </Link>
          <Link href="#on-sale" className="hover:text-gray-600">
            On Sale
          </Link>
          <Link href="#new-arrivals" className="hover:text-gray-600">
            New Arrivals
          </Link>
          <Link href="#brands" className="hover:text-gray-600">
            Brands
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:block flex-1 max-w-xl mx-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 md:text-sm bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Display Search Results */}
        {searchResults.length > 0 && (
          <div className="absolute bg-white top-20 text-black shadow-lg w-full z-10 mt-2 rounded-lg max-h-60 overflow-y-auto">
            <ul>
              {searchResults.map((product) => (
                <li key={product.id} className="px-4 py-2 hover:bg-gray-200">
                  <Link
                    href={`/productpage/${product.id}`}
                    onClick={handleProductClick}
                  >
                    {product.name} - {product.category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Cart & Account */}
        <div className="flex items-center space-x-4">
          <Link href={`/cart`}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </Link>

          {/* Profile Icon */}
          {/* Profile Icon */}
          <div className="relative">
            <button onClick={handleProfileClick} className="w-6 h-6">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>

            {/* Profile Dropdown Menu */}
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg z-30">
                {!isSignedIn ? (
                  <>
                    <Link
                      href="/sign-in"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      <SignedOut>
              <SignInButton />
            </SignedOut>
                    </Link>
                  </>
                ) : (
                  <>
                    <div className="px-4 py-2">Welcome, {user.firstName}</div>
                    <Link
                      href="/orders"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      Orders
                    </Link>
                    {/* Use UserButton for logout */}
                    <div className="block w-full px-4 py-2 hover:bg-gray-200 text-red-500">
                      <SignedIn>
                      <UserButton />
                      </SignedIn>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
