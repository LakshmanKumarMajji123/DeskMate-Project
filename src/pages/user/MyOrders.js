// import { MyOrdersDropdown } from "../../components/MyOrdersDropdown"
// import { Table } from "../../components/Table"
import { useEffect, useState } from "react";
// import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
export const MyOrders = () => {
    // const [url, setUrl] = useState("http://localhost:8000/products/");
    // const { data: products } = useFetch(url);
    const [products, setProducts] = useState([]);
    const [selected, setSelected] = useState('all');
    const filteredRecords = () => {
        if (selected === 'Active') {
            return products.filter(product => product.status === 'Active');
        } else if (selected === 'In Progress') {
            return products.filter(product => product.status === 'In Progress');
        } else {
            return products;
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // console.log("products");
    // console.log(products);
    return (
        <>
            <div className="">
                <div className="mt-10 ">
                    <select value={selected} onChange={(e) => setSelected(e.target.value)} className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="all">All Orders</option>
                        <option value="Active">Active Orders</option>
                        <option value="In Progress">In Progress Orders</option>
                    </select>
                </div>
                <div className="mt-10">
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
                                {filteredRecords().map(product => (
                                    <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
            </div>
        </>
    )
}
