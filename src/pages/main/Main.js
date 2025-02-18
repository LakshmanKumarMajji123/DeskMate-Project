import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';
import { AdminRoutes } from '../../routes/AdminRoutes';
import { UserRoutes } from '../../routes/UserRoutes';

export const Main = () => {
    const { user, isAuthenticated } = useAuth0();
    const [userRoles, setUserRoles] = useState([]);
    useEffect(() => {
        const fetchUserRoles = async () => {
            try {
                if (isAuthenticated && user.email === 'admin@example.com') {
                    const response = await fetch(`http://localhost:8000/users/1`);
                    const userData = await response.json();
                    // console.log("userData");
                    // console.log(userData);
                    console.log(user);
                    setUserRoles(userData.roles || []);
                }
            } catch (error) {
                console.error('Error fetching user roles:', error);
            }
        };

        fetchUserRoles();
    }, [isAuthenticated, user]);
    // console.log("userRoles");
    // console.log(userRoles);
    return (
        <div>
            <BrowserRouter>
                {isAuthenticated && userRoles && (
                    <div>
                        {userRoles.includes('admin') ? (
                            <AdminRoutes />
                        ) : (
                            <UserRoutes />
                        )}
                    </div>
                )}
            </BrowserRouter>
        </div>
    );
};

