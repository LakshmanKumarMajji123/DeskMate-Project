import { Link } from "react-router-dom"
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
export const Table = () => {
    const [url, setUrl] = useState("http://localhost:8000/products/");
    const { data: products } = useFetch(url);
    return (
        <div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Order No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Configuration
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.map((product) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4 text-blue-600"><Link to={`/myorders/${product.id}`}>
                                    {product.id}    </Link>
                                </td>
                                <td className="px-6 py-4">
                                    01-01-2024
                                </td>
                                <td className="px-6 py-4">
                                    {`${product.system} , ${product.configuration.cpu} , ${product.configuration.memory} Ram , ${product.configuration.storage} Storage`}
                                </td>
                                <td className="px-6 py-4">
                                    {product.status}
                                </td>
                                <td className="px-6 py-4">
                                    Cancel Option
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
