import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"

import { ApplicationsCheckbox } from "../../components/ApplicationsCheckbox";
import { useState } from "react";
export const Create = () => {
  const [selectedValues, setSelectedValues] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  var i = 1;
  const values = {}
  for (i = 0; i < selectedValues.length; i++) {
    var data = selectedValues[i];
    values[data] = data;
  }
  const navigate = useNavigate()
  async function handleRegister(e) {
    e.preventDefault();
    const addProduct = {
      name: "Desktop",
      system: e.target.os.value,
      configuration: {
        cpu: e.target.cpu.value,
        memory: e.target.memory.value,
        storage: e.target.storage.value
      },
      status: "In Progress",
      applications: values,
    }
    setProductDetails(addProduct)
    // console.log("Product To Add in Create page ")
    if (addProduct.name === "Choose a option" || addProduct.system === "Choose a option" || addProduct.configuration.cpu === "Choose a option" || addProduct.configuration.memory === "Choose a option" || addProduct.configuration.storage === "Choose a option" || addProduct.applications === "") {
      // console.log("error");
      toast.error("error")
    }
    else {
      navigate('/userdetails',
        { state: { productDetails: addProduct } });
    }
  }
  // useEffect(() => {
  //   console.log(productDetails);
  // }, [productDetails])
  return (
    <>
      <form onSubmit={handleRegister} id="clearform" >
        {/* <Button type="Submit" children="Save" /> */}
        <div className="flex flex-row justify-around">
          <div className="mt-3 ">
            <label htmlFor="cpu" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CPU</label>
            <select id="cpu" name="cpu" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option >Choose a option</option>
              <option value="2 cpu">2 cpu</option>
              <option value="3 cpu">3 cpu</option>
              <option value="4 cpu">4 cpu</option>
              <option value="5 cpu">5 cpu</option>
            </select>

          </div>

          <div className="mt-5 ">
            <label htmlFor="os" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">OS</label>
            <select id="os" name="os" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option >Choose a option</option>
              <option value="Windows 10">Windows 10</option>
              <option value="Windows 11">Windows 11</option>
              <option value="Linux">Linux</option>
              <option value="Windows 12">Windows 12</option>
            </select>

          </div>
        </div>
        <div className="flex flex-row justify-around mt-3">
          <div className="mt-5 ">
            <label htmlFor="memory" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Memory</label>
            <select id="memory" name="memory" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option >Choose a option</option>
              <option value="4Gb">4Gb</option>
              <option value="8Gb">8Gb </option>
              <option value="16Gb">16Gb</option>
              <option value="32Gb">32Gb</option>
            </select>

          </div>

          <div className="mt-5 ">
            <label htmlFor="storage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Storage</label>
            <select id="storage" name="storage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option >Choose a option</option>
              <option value="64Gb">64Gb</option>
              <option value="128Gb">128Gb</option>
              <option value="256Gb">256Gb </option>
              <option value="512Gb">512Gb</option>
              {/* <option value="1Tb">1Tb</option> */}
            </select>

          </div>
        </div>
        <div className="mt-10 ">
          <ApplicationsCheckbox setSelectedValues={setSelectedValues} selectedValues={selectedValues} />
        </div>

        <div className="flex justify-end mt-10">
          <p className="flex justify-between my-2">
            <span className="font-semibold">Total Amount:</span>
            <span className="mr-10">$50</span>
          </p>
          <button type="submit" className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Pay Now</button>
        </div>
        {/* <button className="btn btn-danger" onClick={handleReset} type="reset">Cancel</button> */}

      </form>

    </>
  )
}