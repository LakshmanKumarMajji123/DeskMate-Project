import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const InvoicePage = () => {
    const { orderId, id } = useParams();
    const [order, setOrder] = useState([]);
    const [products, setProducts] = useState([]);
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


    console.log("products")
    console.log(products)
    return (
        <>
            <div className="flex items-center justify-center mt-10  ">
                {order.map((order) => (
                    <div className="w-3/5 bg-white shadow-lg">
                        <div className="flex justify-between p-4">
                            <div>
                                <h1 className="text-3xl italic font-extrabold tracking-widest text-indigo-500">Desktop</h1>
                                <p className="text-base">If account is not paid within 7 days the credits details supplied as
                                    confirmation.</p>
                            </div>
                            <div className="p-2">
                                <ul className="flex">
                                    <li className="flex flex-col items-center p-2 border-l-2 border-indigo-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                        <span className="text-sm">
                                            www.desktop.com
                                        </span>
                                        <span className="text-sm">
                                            www.deskmate.com
                                        </span>
                                    </li>
                                    <li className="flex flex-col p-2 border-l-2 border-indigo-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="text-sm">
                                            2821 Kensington Road,Avondale Estates, GA 30002 USA
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full h-0.5 bg-indigo-500"></div>
                        <div className="flex justify-between p-4">
                            <div>

                                <h6 className="font-bold">Order Date : <span className="text-sm font-medium"> {order.orderDate}</span></h6>
                                <h6 className="font-bold">Order ID : <span className="text-sm font-medium">  {order.orderId}</span></h6>
                            </div>
                            <div className="w-40">
                                <address className="text-sm">
                                    <span className="font-bold"> Billed To : </span>
                                    User,
                                    1-235,Kakinada
                                    Ap ,India
                                    Ph: 9988776655
                                </address>
                            </div>
                            <div className="w-40">
                                <address className="text-sm">
                                    <>
                                        <span className="font-bold">Payment </span>
                                        <p><span classNameName="">Status:</span>{order.payment.status}</p>
                                        <p><span classNameName="">Method:</span>{order.payment.method}</p>
                                    </>
                                </address>
                            </div>
                            <div></div>
                        </div>
                        <div className="flex justify-center p-4">
                            <div className="border-b border-gray-200 shadow">
                                <table className="">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-4 py-2 text-xs text-gray-500 ">
                                                #
                                            </th>
                                            <th className="px-4 py-2 text-xs text-gray-500 ">
                                                Product Name
                                            </th>
                                            <th className="px-4 py-2 text-xs text-gray-500 ">
                                                Configurations
                                            </th>
                                            <th className="px-4 py-2 text-xs text-gray-500 ">
                                                Applications
                                            </th>
                                            <th className="px-4 py-2 text-xs text-gray-500 ">
                                                Price
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        {order.productslist.map((product) => (
                                            <tr className="whitespace-nowrap">
                                                {product && product.id == id ?
                                                    <>
                                                        <td className="px-6 py-4 text-sm text-gray-500">
                                                            {product.id}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <div className="text-sm text-gray-900">
                                                                {product.name}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <div className="text-sm text-gray-500">{product.configurations}</div>
                                                        </td>
                                                        <td className="px-6 py-4 text-sm text-gray-500">
                                                            {product.applications}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {product.price}
                                                        </td></> : <></>

                                                }

                                            </tr>

                                        ))}
                                    </tbody>
                                    <tr className="">
                                        <td colspan="3"></td>
                                        <td className="text-sm font-bold">Sub Total</td>
                                        <td className="text-sm font-bold tracking-wider"><b>${order.totals.subtotal}</b></td>
                                    </tr>

                                    <tr>
                                        <th colspan="3"></th>
                                        <td className="text-sm font-bold"><b>Tax Rate</b></td>
                                        <td className="text-sm font-bold"><b>${order.totals.tax}</b></td>
                                    </tr>
                                    <tr>
                                        <th colspan="3"></th>
                                        <td className="text-sm font-bold"><b>Discount</b></td>
                                        <td className="text-sm font-bold"><b>${order.totals.discount}</b></td>
                                    </tr>

                                    <tr className="text-white bg-gray-800">
                                        <th colspan="3"></th>
                                        <td className="text-sm font-bold"><b>Total</b></td>
                                        <td className="text-sm font-bold"><b>${order.totals.grandTotal}</b></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="flex justify-between p-4">
                            <div>
                                <h3 className="text-xl">Terms And Condition :</h3>
                                <ul className="text-xs list-disc list-inside">
                                    <li>All accounts are to be paid within 7 days from receipt of invoice.</li>
                                    <li>To be paid by cheque or credit card or direct payment online.</li>
                                    <li>If account is not paid within 7 days the credits details supplied.</li>
                                </ul>
                            </div>
                            <div className="p-4">
                                <h3>Signature</h3>
                                <div className="text-4xl italic text-indigo-500">user</div>
                            </div>
                        </div>
                        <div className="w-full h-0.5 bg-indigo-500"></div>

                        <div className="p-4">
                            <div className="flex items-center justify-center">
                                Thank you for the order.
                            </div>
                            <div className="flex items-end justify-end space-x-3">
                                <button className="px-4 py-2 text-sm text-green-600 bg-green-100">Print</button>
                                <button className="px-4 py-2 text-sm text-blue-600 bg-blue-100">Save</button>
                                <button className="px-4 py-2 text-sm text-red-600 bg-red-100">Cancel</button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </>
    )
}
