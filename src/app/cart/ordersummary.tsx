const OrderSummary: React.FC = () => {
    return (
      <div>
        <h2 className="text-lg md:text-2xl font-semibold mb-4">Order Summary</h2>
        <div className="flex justify-between text-sm md:text-md mb-2">
          <span>Subtotal</span>
          <span className="font-bold">$565</span>
        </div>
        <div className="flex justify-between text-sm md:text-md mb-2">
          <span>Discount (-20%)</span>
          <span className="text-red-500">-$113</span>
        </div>
        <div className="flex justify-between text-sm md:text-md mb-2">
          <span>Delivery Fee</span>
          <span>$15</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between text-md md:text-lg font-bold">
          <span>Total</span>
          <span>$467</span>
        </div>
  
        {/* Promo Code */}
        <div className="flex items-center mt-4">
          <input
            type="text"
            placeholder="Add promo code"
            className="w-full border border-gray-300 rounded-l-md px-3 py-2 text-sm"
          />
          <button className="bg-black text-white px-4 py-2 rounded-r-md text-sm hover:bg-gray-800">
            Apply
          </button>
        </div>
  
        {/* Checkout Button */}
        <button className="w-full bg-black text-white mt-6 py-3 rounded-md text-md hover:bg-gray-800">
          Go to Checkout →
        </button>
      </div>
    );
  };
  
  export default OrderSummary;