import Image from "next/image";
import { formatCurrency } from "../helpers";

const Order = ({order}) => {

    const { id, name, total, order: items } = order;

    const completeOrder = () => {
        
    }

    return (
        <div className="border p-10 space-y-5">
            <h3 className="text-2xl font-bold">Id: {id}</h3>
            <p className="text-lg my-10 font-bold">Costumer: {name}</p>
            <div>
                {items.map( item => (
                    <div key={item.id} className="py-3 flex border-b last-of-type:border-0 items-center" >
                        <div className="w-32">
                            <Image  width={400} height={500} src={`/assets/img/${item.image}.jpg`} alt={`SVG Drawing of ${item.name}`} />
                        </div>
                        <div className="p-5 space-y-2">
                            <h4 className="text-xl font-bold text-amber-500">{item.name}</h4>
                            <p className="text-lg font-bold">Amount: {item.amount}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="md:flex md:items-center md:justify-between my-10">
                <p className="mt-5 font-black text-4xl text-amber-500">
                    Total: {formatCurrency(total)}
                </p>

                <button 
                    className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold rounded-lg" 
                    type="button" 
                    onClick={completeOrder}
                >
                    Complete order
                </button>
            </div>
        </div>
    );
}

export default Order;