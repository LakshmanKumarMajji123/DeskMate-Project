import { useState } from "react";
import { useEffect } from "react";
export const ExpiredOrdersTable = () => {
    const [headings, setHeadings] = useState([]);
    const [invoice, setInvoice] = useState({});
    const [dataExist, setDataExist] = useState(false);
    useEffect(() => {
        async function fetchInvoices() {
            const response = await fetch(`http://localhost:8000/expiredorders`);
            // console.log("response");
            // console.log(response);
            const data = await response.json()
            // console.log(data)
            setInvoice(data);
            if (data != '') {
                var h1 = Object.keys(data[0])
                var headings1 = h1.filter(function (e) { return e !== 'productId' })
                setHeadings(headings1);
                setDataExist(true);
            }
        }
        fetchInvoices();
    }, []);
    // console.log("product")
    // console.log(invoice)

    return (
        <>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {dataExist && headings.map((heading) => (
                                <th scope="col" className="px-6 py-3">
                                    {heading}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {dataExist && invoice.map((data) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                {headings && headings.map((heading) => (
                                    <td className="px-6 py-4">
                                        {data[heading]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}
