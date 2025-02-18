import { NavLink } from "react-router-dom";
export const OrdersMenu = () => {
    const activeClass = "text-base block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white";
    const inActiveClass = "text-base block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
    return (
        <header>
            <div className="container flex flex-wrap flex justify-center  mx-auto">
                <ul className="flex flex-col p-4 mt-2 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <NavLink to="/orders" className={({ isActive }) => isActive ? activeClass : inActiveClass} end>New Orders</NavLink>
                    </li>
                    <li>
                        <NavLink to="/activeorders" className={({ isActive }) => isActive ? activeClass : inActiveClass}>Active Orders</NavLink>
                    </li>
                    <li>
                        <NavLink to="/expiredorders" className={({ isActive }) => isActive ? activeClass : inActiveClass} end>Expired Orders</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}