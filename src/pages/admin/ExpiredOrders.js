import { ExpiredOrdersTable } from "./ExpiredOrdrersTable"
import { OrdersMenu } from "./OrdersMenu"

export const ExpiredOrders = () => {
  return (
   <>
    <div className="mt-3"><OrdersMenu /></div>
    <div className="mt-10"><ExpiredOrdersTable /></div>
   </>
  )
}
