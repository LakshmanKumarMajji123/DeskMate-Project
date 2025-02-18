import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MyOrders } from '../pages/user/MyOrders'
import { MyDesktop } from '../pages/user/MyDesktop'
import { MyOrdersDetailTable } from '../pages/user/MyOrdersDetailTable'
import { Create } from '../pages/user/Create'
import { UserForm } from '../pages/user/UserForm'
import { DisplayUserDetails } from '../pages/user/DisplayUserDetails'
import { UserDetails } from '../pages/user/UserDetails'
import { InvoicePage } from '../pages/user/InvoicePage'
import { UserHeader } from '../components/UserHeader'
import { YourProfile } from '../pages/user/YourProfile'


export const UserRoutes = () => {

    return (
        <>
            <UserHeader />
            <Routes path="/user" >
                <Route path="/" element={<MyDesktop />} />
                <Route path="/create" element={<Create />} />
                <Route path="/myorders" element={<MyOrders />} />
                <Route path="/myorders/:id" element={<MyOrdersDetailTable />} />
                <Route path="/userform" element={<UserForm />} />
                <Route path="/displayuserdetails" element={<DisplayUserDetails />} />
                <Route path="/userdetails" element={<UserDetails />} />
                <Route path="/myorders/:productId/invoice/:id" element={<InvoicePage />} />
                <Route path="/yourprofile" element={<YourProfile />} />
            </Routes>
        </>
    )
}
