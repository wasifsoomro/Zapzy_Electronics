"use client"

import React, { useEffect, useState } from 'react';
import { client } from '../../sanity/lib/client';
import { UserButton } from '@clerk/nextjs';

interface Order {
  _id: string;
  orderId: string;
  customerName: string;
  status: string;
  total: number;
  shipmentStatus: string;
}

const AdminDashboard = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from Sanity when the component mounts
  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      const data = await client.fetch(`
        *[_type == "order"]{
          _id,
          orderId,
          customerName,
          status,
          total,
          shipmentStatus
        }
      `);
      setOrders(data);
      setLoading(false);
    };

    fetchOrders();
  }, []);

  return (
    <div className="grid grid-cols-6 min-h-screen">
      {/* Sidebar */}
      <aside className="col-span-1 bg-gray-800 text-white p-6">
        <div className="mb-6 text-2xl font-semibold">Admin Panel</div>
        <ul className="space-y-4">
          <li>
            <a href="#" className="hover:text-blue-400">Dashboard</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">Orders</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">Products</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">Customers</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">Reports</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">Settings</a>
          </li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="col-span-5 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
          <div>
            <span className="text-lg">Welcome, Admin</span>
            <button className="ml-4 px-4 py-2 text-white rounded-lg">
              <UserButton />
            </button>
          </div>
        </header>

        {/* Stats Cards */}
        <section className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-200 p-6 rounded-lg">
            <h3 className="text-lg font-semibold">Total Sales</h3>
            <p className="text-2xl font-bold text-blue-600">$15,000</p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg">
            <h3 className="text-lg font-semibold">Total Orders</h3>
            <p className="text-2xl font-bold text-blue-600">{orders.length}</p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg">
            <h3 className="text-lg font-semibold">Total Products</h3>
            <p className="text-2xl font-bold text-blue-600">300</p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg">
            <h3 className="text-lg font-semibold">Total Customers</h3>
            <p className="text-2xl font-bold text-blue-600">150</p>
          </div>
        </section>

        {/* Recent Orders */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Recent Orders</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 text-left">Order ID</th>
                  <th className="py-2 px-4 text-left">Customer</th>
                  <th className="py-2 px-4 text-left">Status</th>
                  <th className="py-2 px-4 text-left">Total</th>
                  <th className="py-2 px-4 text-left">Shipment Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id} className="border-t border-gray-200">
                    <td className="py-2 px-4">{order.orderId}</td>
                    <td className="py-2 px-4">{order.customerName}</td>
                    <td className="py-2 px-4">{order.status}</td>
                    <td className="py-2 px-4">${order.total}</td>
                    <td className="py-2 px-4">{order.shipmentStatus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
