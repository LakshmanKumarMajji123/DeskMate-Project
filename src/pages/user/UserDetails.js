import { useEffect, useState } from "react";
import { DisplayUserDetails } from "./DisplayUserDetails";
import { UserForm } from "./UserForm";
import { useLocation } from "react-router-dom";

export const UserDetails = () => {
    const location = useLocation();
    const [details, setDetails] = useState({});
    const { productDetails } = location.state || {};
    const [user, setUser] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/userdetails');
                const data = await response.json();
                setUser(data);
                setDetails(productDetails);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {user && user ? <DisplayUserDetails details={details} /> : <UserForm details={details} />}
        </>
    )
}
