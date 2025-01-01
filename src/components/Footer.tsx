// components/Footer.jsx
import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-white py-8 px-4 md:px-8 lg:px-16">
      {/* Newsletter Section */}
      <div className="bg-black rounded-xl p-6 mb-12 flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 md:mb-0">
          STAY UPTO DATE ABOUT<br />
          OUR LATEST OFFERS
        </h2>
        <div className="w-full md:w-auto flex flex-col md:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-2 rounded-full w-full md:w-64"
          />
          <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transition">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Brand Section */}
        <div className="lg:col-span-1">
          <Link href="/" className="text-2xl font-bold">SHOP.CO</Link>
          <p className="text-gray-600 mt-4 text-sm">
            We have clothes that suit your style and which you&apos;re proud to wear. From women to men.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-black hover:text-gray-600"><FaTwitter size={20} /></a>
            <a href="#" className="text-black hover:text-gray-600"><FaFacebook size={20} /></a>
            <a href="#" className="text-black hover:text-gray-600"><FaInstagram size={20} /></a>
            <a href="#" className="text-black hover:text-gray-600"><FaTiktok size={20} /></a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-bold mb-4">COMPANY</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="text-gray-600 hover:text-black">About</Link></li>
            <li><Link href="/features" className="text-gray-600 hover:text-black">Features</Link></li>
            <li><Link href="/works" className="text-gray-600 hover:text-black">Works</Link></li>
            <li><Link href="/career" className="text-gray-600 hover:text-black">Career</Link></li>
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h3 className="font-bold mb-4">HELP</h3>
          <ul className="space-y-2">
            <li><Link href="/support" className="text-gray-600 hover:text-black">Customer Support</Link></li>
            <li><Link href="/delivery" className="text-gray-600 hover:text-black">Delivery Details</Link></li>
            <li><Link href="/terms" className="text-gray-600 hover:text-black">Terms & Conditions</Link></li>
            <li><Link href="/privacy" className="text-gray-600 hover:text-black">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* FAQ Links */}
        <div>
          <h3 className="font-bold mb-4">FAQ</h3>
          <ul className="space-y-2">
            <li><Link href="/account" className="text-gray-600 hover:text-black">Account</Link></li>
            <li><Link href="/managedeliveries" className="text-gray-600 hover:text-black">Manage Deliveries</Link></li>
            <li><Link href="/orders" className="text-gray-600 hover:text-black">Orders</Link></li>
            <li><Link href="/payments" className="text-gray-600 hover:text-black">Payments</Link></li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="font-bold mb-4">RESOURCES</h3>
          <ul className="space-y-2">
            <li><Link href="/ebooks" className="text-gray-600 hover:text-black">Free eBooks</Link></li>
            <li><Link href="/tutorial" className="text-gray-600 hover:text-black">Development Tutorial</Link></li>
            <li><Link href="/blog" className="text-gray-600 hover:text-black">How to - Blog</Link></li>
            <li><Link href="/youtube" className="text-gray-600 hover:text-black">Youtube Playlist</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 text-sm mb-4 md:mb-0">
          Shop.co © 2000-2023. All Rights Reserved
        </p>
        <div className="flex gap-3">
          <Image src="/visa.png" alt="Visa" width={80} height={40} className="h-10 w-20" />
          <Image src="/master.png" alt="Mastercard" width={80} height={40} className="h-10 w-20" />
          <Image src="/paypal.png" alt="PayPal" width={80} height={40} className="h-10 w-20" />
          <Image src="/applepay.png" alt="Apple Pay" width={80} height={40} className="h-10 w-20" />
          <Image src="/googlepay.png" alt="Google Pay" width={80} height={40} className="h-10 w-20" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;