import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
export const InvoiceList = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8000/orders?orderId=${orderId}`);
                if (response.ok) {
                    const data = await response.json();
                    setOrder(data);
                }
            } catch (error) {
                console.error('Error fetching order details:', error);
            }
        };

        fetchOrderDetails();
    }, [orderId]);
    console.log("order")
    console.log(order)
    return (
        <>
            {order.map((order) => (
                <div>
                    <div className="mt-10 text-md font-bold">{order.user.name}</div>

                    <div className="relative overflow-x-auto mt-3">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        #
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Product Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Configurations
                                    </th>

                                    <th scope="col" className="px-6 py-3">
                                        Details
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {order.productslist.map((product, index) => (
                                    <tr key={product.id}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-6 py-4">
                                            {product.id}
                                        </td>
                                        <td className="px-6 py-4">
                                            {product.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {/* {product.configurations} */}
                                            {index === hoveredIndex ? <><div data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom" class="ms-3 mb-2 md:mb-0 text-black focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 ">{product.configurations}, {product.applications}</div>
                                            </> : `${product.configurations} ..... `}
                                        </td>
                                        <td className="px-6 py-4 text-blue-600">
                                            {/* <Link to={`/invoicepage/${order.orderId}`}>View Details</Link> */}
                                            <Link to={`/invoicelist/${order.orderId}/products/${product.id}`}>View Invoice</Link>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>

                        </table>
                    </div>
                </div>
            ))}
        </>
    )
}
