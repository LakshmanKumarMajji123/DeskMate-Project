import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
export const InvoiceTable = () => {
    const [headings, setHeadings] = useState([]);
    const [invoice, setInvoice] = useState({});
    const [dataExist, setDataExist] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        async function fetchInvoices() {
            const response = await fetch(`http://localhost:8000/invoices?productId=${id}`);
            // console.log("response");
            // console.log(response);
            const data = await response.json()
            // console.log(data)
            setInvoice(data);
                            // if (data != '') {
                            //     var h1 = Object.keys(data[0])
                            //     var headings1 = h1.filter(function (e) { return e !== 'productId' })
                            //     setHeadings(headings1);
                                 setDataExist(true);
                            // }
        }
        fetchInvoices();
    }, [id]);
    // console.log("product")
    // console.log(invoice)

    return (
        // <>
        //     <div className="relative overflow-x-auto">
        //         <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        //             <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        //                 <tr>
        //                     {dataExist && headings.map((heading) => (
        //                         <th scope="col" className="px-6 py-3">
        //                             {heading}
        //                         </th>
        //                     ))}
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {dataExist && invoice.map((data) => (
        //                     <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        //                         {headings && headings.map((heading) => (
        //                             <td className="px-6 py-4">
        //                                 {data[heading]}
        //                             </td>

        //                         ))}
        //                     </tr>
        //                 ))}
        //             </tbody>
        //         </table>
        //     </div>

        // </>
        <>
         <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                InvoiceDate
                            </th>
                            <th scope="col" className="px-6 py-3">
                               InvoiceAmount
                            </th>
                            <th scope="col" className="px-6 py-3">
                               PaidAmount
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                               Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataExist && invoice.map((invoice) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                {/* <td className="px-6 py-4 text-blue-600"><Link to={`/myorders/${invoice.id}`}>
                                    {product.id}    </Link>
                                </td> */}
                                <td className="px-6 py-4">
                                   {invoice.invoiceDate}
                                </td>
                                <td className="px-6 py-4">
                                {invoice.invoiceAmount}
                                </td>
                                <td className="px-6 py-4">
                                {invoice.paidAmount}  
                                </td>
                                <td className="px-6 py-4">
                                {invoice.status} 
                                </td>
                                <td className="px-6 py-4">
                                {invoice.description} 
                                </td>
                                <td className="px-6 py-4">
                                {invoice.actions} 
                                </td>
                                 <td className="px-6 py-4 text-blue-600"><Link to={`/myorders/${invoice.productId}/invoice/${invoice.id}`}>
                                
                                    View Invoice   </Link>
                                </td> 
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
