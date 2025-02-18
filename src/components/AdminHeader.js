
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/desktopimage.jpg";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useAuth0 } from "@auth0/auth0-react";
export const AdminHeader = () => {
    //   const { logout } = useAuth0();
    const [hidden, setHidden] = useState(true);
    const { logout } = useAuth0();
    const { isAuthenticated, user } = useAuth0();
    const activeClass = "text-base block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white";
    const inActiveClass = "text-base block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <header>
            <nav className="bg-white border-b-2 border-gray-200 px-2 sm:px-4 py-2 dark:bg-gray-900 dark:border-b-1 dark:border-gray-900">
                {isAuthenticated &&
                    <div className="container flex flex-wrap justify-between items-center mx-auto">
                        <Link to="/" className="flex items-center">
                            <img src={Logo} className="mr-2 h-6 sm:h-9" alt="Cinemate Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Desktop</span>
                        </Link>
                        <div id="mobile-nav" className="flex md:order-2">
                            <Menu as="div" className="relative ml-3 ">
                                <div>
                                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">Open user menu</span>
                                        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">

                                            {/* <svg className="absolute w-12 h-12 text-gray-400 -left-1" href="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg> */}
                                            <img class="w-14 h-12 bg-white rounded-full" src={user.picture} alt={user.family_name} />
                                        </div>
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <NavLink to="/yourprofile"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Your Profile
                                                </NavLink>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <NavLink
                                                    to="#"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Settings
                                                </NavLink>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                //   <Link to="/" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                                                //     className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                //   >
                                                //     Sign out
                                                //   </Link>
                                                <Link to="/" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Sign out
                                                </Link>
                                            )}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                            <button onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                                <span className="sr-only">Open menu</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div className={`${hidden ? "hidden" : ""} justify-between items-center w-full md:flex md:w-auto md:order-1`} id="navbar-search">
                            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <NavLink to="/" className={({ isActive }) => isActive ? activeClass : inActiveClass} end>Customers</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/orders" className={({ isActive }) => isActive ? activeClass : inActiveClass}>Orders</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/invoices" className={({ isActive }) => isActive ? activeClass : inActiveClass}>Invoices</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                }
            </nav>
        </header>
    )
}