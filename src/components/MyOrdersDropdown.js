export const MyOrdersDropdown = () => {
  return (
    <>
      <select id="cpu" name="cpu" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>All Orders</option>
        <option value="2cpu">Pending Orders</option>
        <option value="3cpu">Completd</option>
      </select>
    </>
  )
}
