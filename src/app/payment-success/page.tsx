"use client"
import { useEffect, useState } from 'react';

interface IParams {
  searchParams: {
    amount: number;
    orderId: string;
    customerName: string;
    email: string;
    items: string; // Will parse the JSON string to array
  };
}

const PaymentSuccess = ({ searchParams }: IParams) => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    // Parse the items string into an array if it's not empty
    if (searchParams.items) {
      try {
        const parsedItems = JSON.parse(searchParams.items);
        setItems(parsedItems);
      } catch (error) {
        console.error("Error parsing items:", error);
      }
    }
  }, [searchParams.items]);

  const { amount, orderId, customerName, email } = searchParams;

  const orderTotal = Array.isArray(items)
    ? items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    : 0;

  return (
    <div className="container mx-auto p-6 max-w-7xl bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
        Thank You for Your Purchase, {customerName}!
      </h1>
    <h1 className='text-5xl text-center p-11'>Under Working</h1>
      <p className="text-lg text-center mb-4 text-gray-600">
        Your payment of <span className="font-bold text-blue-500">${amount}</span> has been successfully processed.
      </p>

      <div className="order-summary bg-gray-50 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Order Summary</h2>
        <div className="space-y-6">
          {items.length > 0 ? (
            items.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-lg text-gray-800">
                  {item.name} (x{item.quantity})
                </span>
                <span className="font-semibold text-gray-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No items found in the order.</p>
          )}
        </div>

        <hr className="my-6 border-t border-gray-200" />

        <div className="flex justify-between font-semibold text-xl text-gray-900">
          <span>Total</span>
          <span>${orderTotal.toFixed(2)}</span>
        </div>
      </div>

      <div className="order-details bg-gray-50 p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Your Order Details</h3>
        <div className="space-y-2">
          <p className="text-md text-gray-600">
            Order ID: <span className="font-bold">{orderId}</span>
          </p>
          <p className="text-md text-gray-600">
            Email: <span className="font-bold">{email}</span>
          </p>
          <p className="text-md text-gray-600">
            We will send you an email with tracking information once your order has shipped.
          </p>
        </div>
      </div>

      <div className="thank-you-note text-center text-lg text-gray-800">
        <p className="mb-4">Thank you for shopping with us! We appreciate your business and look forward to serving you again.</p>
        <p className="text-sm text-gray-500">
          If you have any questions or need assistance, please contact us at support@example.com.
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
