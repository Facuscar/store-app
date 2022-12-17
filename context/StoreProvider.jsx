import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const StoreContext = createContext();

export const StoreProvider = ({children}) => {
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState({});
    const [product, setProduct] = useState({});
    const [modal, setModal] = useState(false);
    const [order, setOrder] = useState([]);

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

    const handleCategoryClick = (id) => {
        setCurrentCategory(categories.find( item => item.id === id));
    };

    const handleSetProduct = (product) => {
        setProduct(product);
    };

    const handleModalChange = () => {
        setModal( prev => !prev);
    };

    const addToOrder = ({categoryId, image, ...product}) => {
        if (order.some(orderProduct => orderProduct.id === product.id)) {
            const updatedOrder = order.map(orderProduct => orderProduct.id === product.id ? product : orderProduct);
            setOrder(updatedOrder);
            toast.success('Order updated succesfully');
            return;
        }
        setOrder(prev => [...prev, product]);
        toast.success('Added to order succesfully');
    };

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
            order
        }}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreContext;