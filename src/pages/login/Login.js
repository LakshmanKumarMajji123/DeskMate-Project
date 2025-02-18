import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return <div className="mt-10 flex justify-center ">
    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => loginWithRedirect()}>Login</button>
  </div>
};
export default Login;
