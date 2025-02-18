import { ActiveOrdersTable } from "./ActiveOrdersTable"
import { OrdersMenu } from "./OrdersMenu"

export const ActiveOrders = () => {
  return (
   <>
     <div className="mt-3"><OrdersMenu /></div>
     <div className="mt-10"><ActiveOrdersTable /></div>
   </>
  )
}
