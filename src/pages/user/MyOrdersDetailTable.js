import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { InvoiceTable } from "./InvoiceTable";

export const MyOrdersDetailTable = () => {
    const [applications, setApplications] = useState({});
    const [product, setProduct] = useState({});
    const [dataExist, setDataExist] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch(`http://localhost:8000/products/${id}`);
            // console.log("response");
            // console.log(response);
            const data = await response.json()
            // console.log(data)
            const objectString = Object.entries(data.applications).map(([key, value]) => `${value}`).join(',');
            setApplications(objectString);
            setProduct(data);
            setDataExist(true);
        }
        fetchProducts();
    }, [id]);
    // console.log("product")
    // console.log(product)

    return (
        <>

            <div className="grid grid-cols-3 gap-3 mt-10 ">
                {dataExist ? <div className="col-span-2 ml-10  font-medium text-blue-700 dark:text-gray-400">Order Id :<span className="font-medium text-gray-700 dark:text-gray-400 ">{product.id}</span> </div> : ""}

                {dataExist ? <div className="mb-2 font-medium text-blue-700 dark:text-gray-400">Applications : <span className="font-medium text-gray-700 dark:text-gray-400 ">{applications}</span></div> : ""}

                {dataExist ? <div className="col-span-2 ml-10  font-medium text-blue-700 dark:text-gray-400">Configuration : <span className="font-medium text-gray-700 dark:text-gray-400   "> {`${product.system} , ${product.configuration.cpu} , ${product.configuration.memory} Ram , ${product.configuration.storage} Storage`}</span> </div> : ""}

                <div className="mb-2 font-medium text-blue-700 dark:text-gray-400">Date :<span className="font-medium text-gray-700 dark:text-gray-400  grid-col-span-2 "> 23-1-2023 </span></div>

                {/* {dataExist ?  <div class="col-span-2 ml-10  font-medium text-blue-700 dark:text-gray-400">Status  <span className="font-medium text-gray-700 dark:text-gray-400  "> {product.status} </span> </div>: ""} */}

                {/* <div class="mb-2 font-medium text-blue-700 dark:text-gray-400">Total Payment  <span className="font-medium text-gray-700 dark:text-gray-400  ">$100 </span></div> */}

                {/* <div class="col-span-2 ml-10  font-medium text-blue-700 dark:text-gray-400">Actions  <span className="font-medium text-gray-700 dark:text-gray-400  ms-10">Reactivate </span></div> */}

                {/* <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Edit  </div> */}

            </div>
            <div className="mt-10">
                <h2 className=" text-2xl font-medium text-gray-900 dark:text-white">Invoices</h2>
                <div className="mt-3">
                    <InvoiceTable />
                </div>
            </div>
        </>
    )
}
