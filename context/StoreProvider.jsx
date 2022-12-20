import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const StoreContext = createContext();

export const StoreProvider = ({children}) => {
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState({});
    const [product, setProduct] = useState({});
    const [modal, setModal] = useState(false);
    const [order, setOrder] = useState([]);
    const [name, setName] = useState('');
    const [total, setTotal] = useState(0);

    const router = useRouter();

    const getCategories = async () => {
        const { data } = await axios('/api/categories');
        setCategories(data);
    }

    useEffect(() => {
        getCategories();
    }, []);

    useEffect(() => {
        setCurrentCategory(categories[0]);
    }, [categories]);

    useEffect(() => {
      setTotal(order.reduce((partialSum, item) => partialSum + (item.price * item.amount) , 0));  
    }, [order]);

    const handleCategoryClick = (id) => {
        router.push('/');
        setCurrentCategory(categories.find( item => item.id === id));
    };

    const handleSetProduct = (product) => {
        setProduct(product);
    };

    const handleModalChange = () => {
        setModal( prev => !prev);
    };

    const handleEditAmount = (id) => {
        setProduct(order.find( item => item.id === id));
        setModal( prev => !prev);
    }

    const handleDeleteProduct = (id) => {
        setOrder( prev => prev.filter( item => item.id !== id));
    }

    const addToOrder = ({categoryId, ...product}) => {
        if (order.some(orderProduct => orderProduct.id === product.id)) {
            const updatedOrder = order.map(orderProduct => orderProduct.id === product.id ? product : orderProduct);
            setOrder(updatedOrder);
            toast.success('Order updated succesfully');
            return;
        }
        setOrder(prev => [...prev, product]);
        toast.success('Added to order succesfully');
    };

    const handleNameChange = (newName) => {
        setName(newName);
    }

    const placeOrder = async () => {
        try {
            await axios.post('/api/orders', { order, name, total, date: Date.now().toString() });

            setCurrentCategory(categories[0]);
            setProduct({});
            setOrder([]);
            setName('');
            setTotal(0);

            toast.success('Order submitted succesfully');
            setTimeout(() => {
                router.push('/');
            }, 3000);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <StoreContext.Provider value={{
            categories,
            currentCategory,
            handleCategoryClick,
            product,
            handleSetProduct,
            modal,
            handleModalChange,
            addToOrder,
            order,
            handleEditAmount,
            handleDeleteProduct,
            name,
            handleNameChange,
            placeOrder,
            total,
        }}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreContext;