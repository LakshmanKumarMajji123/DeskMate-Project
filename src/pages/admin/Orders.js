import { NewOrders } from "./NewOrders"
import { OrdersMenu } from "./OrdersMenu"


export const Orders = () => {
    return (
        <>
            <div className="mt-3"><OrdersMenu /></div>
            <div className="mt-10"><NewOrders /></div>
        </>
    )
}
