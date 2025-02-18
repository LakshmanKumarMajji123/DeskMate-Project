import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const InvoiceTable = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:8000/orders');
        if (response.ok) {
          const data = await response.json();
          setOrders(data);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);
  console.log("orders")
  console.log(orders)
  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Order ID
              </th>
              <th scope="col" className="px-6 py-3">
                User Name
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Order Date
              </th>
              <th scope="col" className="px-6 py-3">
               Details
              </th>

            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">
                  {order.orderId}
                </td>
                <td className="px-6 py-4">
                  {order.user.name}
                </td>
                <td className="px-6 py-4">
                  {order.status}
                </td>
                <td className="px-6 py-4">
                  {order.orderDate}
                </td>

                <td className="px-6 py-4 text-blue-600">
                  {/* <Link to={`/invoicepage/${order.orderId}`}>View Details</Link> */}
                  <Link to={`/invoicelist/${order.orderId}`}>View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  )
}
