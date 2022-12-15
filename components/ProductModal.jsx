import { useState, useEffect } from "react";
import Image from "next/image";
import useStore from "../hooks/useStore";
import { formatCurrency } from "../helpers";

const ProductModalContent = () => {

    const { product, handleModalChange, addToOrder, order } = useStore();
    const [amount, setAmount] = useState(1);

    useEffect(() => {
        if (order.some((orderProduct) => orderProduct.id === product.id )) {
            const editProduct = order.find((orderProduct) => orderProduct.id === product.id);
            setAmount(editProduct.amount);
        }
    }, [product, order]);

    const handlePlusClick = () =>{
        setAmount( prev => prev + 1)
    }

    const handleMinusClick = () =>{
        setAmount( prev => prev == 0 ? 0 : prev - 1)
    }

    return (
        <div className="md:flex gap-10">
            <div className="md:w-1/3">
                <Image width={300} height={400} alt={`Drawing of ${product.image}`} src={`/assets/img/${product.image}.jpg`} />
            </div>
            <div className="md:w-2/3">
                <div className="flex justify-end">
                    <button onClick={handleModalChange}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button> 
                </div>
                <h1 className="text-3xl font-bold mt-5">{product.name}</h1>
                <p className="mt-5 font-black text-5xl text-amber-500">{formatCurrency(product.price)}</p>
                <div className="flex gap-4 mt-5">
                    <button type="button" onClick={handleMinusClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <p className="text-3xl" >{amount}</p>
                    <button onClick={handlePlusClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
                <button 
                    type="button" 
                    className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded" 
                    onClick={ () => {
                        addToOrder({ ...product, amount });
                        handleModalChange();
                    }}
                >
                    Add to chart
                </button>
            </div>
        </div>
    )
}

export default ProductModalContent;