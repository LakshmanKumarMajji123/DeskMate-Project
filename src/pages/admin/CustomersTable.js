import { Link } from "react-router-dom"
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

export const CustomersTable = () => {
    const [url, setUrl] = useState("http://localhost:8000/customers/");
    const { data: products } = useFetch(url);
    return (
        <>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Customer Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Address
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Order Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.map((product) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4">
                                    {product.customerId}
                                </td>
                                <td className="px-6 py-4">
                                    {product.name}
                                </td>
                                <td className="px-6 py-4">
                                    {product.address}
                                </td>
                                <td className="px-6 py-4">
                                    {product.email}
                                </td>
                                <td className="px-6 py-4">
                                    {product.phoneNumber}
                                </td>
                                <td className="px-6 py-4 text-blue-600"><Link to={`/orders/${product.customerId} `}>
                                    {product.orderDetails}     </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}
