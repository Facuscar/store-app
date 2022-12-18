import Image from "next/image";
import { formatCurrency } from "../helpers";

const OrderItem = ({ item }) => {
    console.log(item);
    return (
        <div className="shadow p-5 mb-3 flex gap-10 items-center">
            <div className="md:w-1/6">
                <Image width={300} height={400} alt={`Drawing of ${item.name}`} src={`/assets/img/${item.image}.jpg`} />
            </div>
            <div className="md:w-5/6">
                <p className="text-3xl font-bold">{item.name}</p>
                <p className="text-xl font-bold mt-2">Amount: {item.amount}</p>
                <p className="text-xl font-bold mt-2">Price: {formatCurrency(item.price)}</p>
                <p className="text-xl font-bold mt-2">Subtotal: {formatCurrency(item.price * item.amount)}</p>
            </div>
        </div>
    )
}

export default OrderItem;