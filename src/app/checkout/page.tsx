"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useUser } from "@clerk/clerk-react";

const CheckoutPage = () => {
    const [shippingAddress, setShippingAddress] = useState({
        fullName: "",
        email: "",
        streetAddress: "",
        city: "",
        postalCode: "",
        country: "",
    });
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState("");
    const [isInfoSaved, setIsInfoSaved] = useState(false); // Moved here

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        const { fullName, email, streetAddress, city, postalCode, country } = shippingAddress;
        if (fullName && email && streetAddress && city && postalCode && country) {
            setIsInfoSaved(true);
            try {
                setLoading(true);
                const res = await fetch("/api/checkout", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(shippingAddress),
                });

                const data = await res.json();
                if (res.ok) {
                    setResponse("Message sent successfully!");
                    setShippingAddress({ fullName: "", email: "", streetAddress: "", city: "", postalCode: "", country: "" });
                } else {
                    setResponse(data.error || "Something went wrong.");
                }
            } catch (error) {
                setResponse("Error sending message.");
            } finally {
                setLoading(false);
            }
        } else {
            alert("Please fill in all fields before saving.");
        }
    };

    const DynamicStripePayment = dynamic(() => import("../../components/StripePayment"), { ssr: false });
    const { user } = useUser();

    const [cart, setCart] = useState<any[]>([]);
    const [total, setTotal] = useState(0);
    const [coupon, setCoupon] = useState("");
    const [discount, setDiscount] = useState(0);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(savedCart);

        const calculateTotal = savedCart.reduce((acc: any, item: any) => acc + item.price * item.quantity, 0);
        setTotal(calculateTotal);
    }, []);

    const applyCoupon = () => {
        if (coupon === "DISCOUNT10") {
            setDiscount(0.1 * total);
        } else {
            setDiscount(0);
        }
    };

    return (
        <div className="checkout container mx-auto p-6 max-w-7xl bg-white shadow-lg rounded-lg">
            <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Checkout</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Order Summary */}
                <div className="order-summary p-6 border rounded-lg shadow-md bg-gray-50">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-700">Order Summary</h2>
                    <div className="space-y-6">
                        {cart.map((item) => (
                            <div key={item.id} className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <Image
                                        src={item.image || "/placeholder.jpg"}
                                        alt={item.name}
                                        width={64}
                                        height={64}
                                        className="w-16 h-16 object-cover rounded-md shadow-sm"
                                    />
                                    <span className="text-lg font-medium text-gray-800">
                                        {item.name} (x{item.quantity})
                                    </span>
                                </div>
                                <span className="text-lg font-semibold text-gray-900">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Coupon Code Section */}
                    <div className="coupon-section mt-4">
                        <input
                            type="text"
                            placeholder="Enter coupon code"
                            value={coupon}
                            onChange={(e) => setCoupon(e.target.value)}
                            className="p-2 w-full border rounded-md mb-4"
                        />
                        <button onClick={applyCoupon} className="w-full bg-blue-500 text-white py-2 rounded-md">
                            Apply Coupon
                        </button>
                    </div>

                    <hr className="my-6 border-t border-gray-200" />

                    {/* Total Breakdown */}
                    <div className="flex justify-between font-semibold text-xl text-gray-900">
                        <span>Subtotal</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-xl text-gray-900">
                        <span>Discount</span>
                        <span>-${discount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-xl text-gray-900">
                        <span>Total</span>
                        <span>${(total - discount).toFixed(2)}</span>
                    </div>
                </div>

                {/* User Information */}
                <div className="user-info p-6 border rounded-lg shadow-md bg-gray-50">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-700">Shipping Information</h2>
                    <div className="space-y-4">
                        {["fullName", "email", "streetAddress", "city", "postalCode", "country"].map((field) => (
                            <div key={field}>
                                <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                                    {field.replace(/([A-Z])/g, " $1")}
                                </label>
                                <input
                                    type={field === "email" ? "email" : "text"}
                                    id={field}
                                    name={field}
                                    value={shippingAddress[field as keyof typeof shippingAddress]}
                                    onChange={handleChange}
                                    className="p-2 w-full border rounded-md"
                                    required
                                />
                            </div>
                        ))}
                    </div>

                    {/* Save Button */}
                    <button onClick={handleSave} className="mt-6 w-full bg-green-500 text-white py-2 rounded-md">
                        {loading ? "Saving..." : "Save Information"}
                    </button>
                </div>
            </div>

            {/* Payment Section */}
            <div className="payment-section p-6 border rounded-lg shadow-md bg-gray-50 mt-8">
                <h2 className="text-2xl font-semibold mb-6 text-gray-700">Payment Details</h2>
                {isInfoSaved ? (
                    <DynamicStripePayment total={total - discount} />
                ) : (
                    <div className="text-center text-gray-500">Please save your information to proceed with payment.</div>
                )}
            </div>
        </div>
    );
};

export default CheckoutPage;
