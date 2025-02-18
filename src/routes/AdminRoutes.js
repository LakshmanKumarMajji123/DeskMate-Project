import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Customers } from '../pages/admin/Customers'
import { Orders } from '../pages/admin/Orders'
import { ActiveOrders } from '../pages/admin/ActiveOrders'
import { ExpiredOrders } from '../pages/admin/ExpiredOrders'
import { Invoices } from '../pages/admin/Invoices'
import { InvoicePage } from '../pages/admin/InvoicePage'
import { InvoiceList } from '../pages/admin/InvoiceList'
import { AdminHeader } from '../components/AdminHeader'
import { YourProfile } from '../pages/admin/YourProfile'

export const AdminRoutes = () => {
    return (
        <>
          <AdminHeader />  
            <Routes path ="/admin">
                <Route path="/" element={<Customers />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/activeorders" element={<ActiveOrders />} />
                <Route path="/expiredorders" element={<ExpiredOrders />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/invoicelist/:orderId" element={<InvoiceList />} />
                <Route path="/invoicelist/:orderId/products/:id" element={<InvoicePage />} />
                <Route path="/yourprofile" element={<YourProfile />} />
            </Routes>
        </>
    )
}
