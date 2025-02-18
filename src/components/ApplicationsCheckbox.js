import { useState } from "react"

export const ApplicationsCheckbox = ({selectedValues, setSelectedValues}) => {
    // const [selectedValues, setSelectedValues] = useState([]);
 
  const handleCheckboxChange = (value) => {
    const updatedValues = selectedValues.includes(value)
      ? selectedValues.filter((item) => item !== value)
      : [ ...selectedValues,value];
 
    setSelectedValues(updatedValues);
    
    }
    // console.log(selectedValues)
    return (
        <>
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Applications</h3>
            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center ps-3">
                        <input id="chrome" name="chrome" type="checkbox" value="Chrome" onChange={() => handleCheckboxChange("Chrome")} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="chrome" name="chrome" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Chrome</label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center ps-3">
                        <input id="vs_code" name="vs_code" type="checkbox" value="VS Code" onChange={() => handleCheckboxChange("VS Code")} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"  />
                        <label htmlFor="vs_code" name="vs_code" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">VS Code</label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center ps-3">
                        <input id="vlc" name="vlc" type="checkbox" value="Vlc" onChange={() => handleCheckboxChange("Vlc")} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"  />
                        <label htmlFor="vlc" name="vlc" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">VLC</label>
                    </div>
                </li>
                <li className="w-full dark:border-gray-600">
                    <div className="flex items-center ps-3">
                        <input id="teams" name="teams" type="checkbox" value="Teams"  onChange={() => handleCheckboxChange("Teams")} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"  />
                        <label htmlFor="teams" name="teams" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Teams</label>
                    </div>
                </li>
                <li className="w-full dark:border-gray-600">
                    <div className="flex items-center ps-3">
                        <input id="firefox" name="firefox" type="checkbox" value="Firefox" onChange={() => handleCheckboxChange("Firefox")} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="firefox" name="firefox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Firefox</label>
                    </div>
                </li>
            </ul>


        </>
    )
}
