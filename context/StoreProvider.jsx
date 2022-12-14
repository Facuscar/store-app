import { useState, useEffect, createContext } from "react";
import axios from "axios";

const StoreContext = createContext();

export const StoreProvider = ({children}) => {
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState({});
    const [product, setProduct] = useState({});
    const [modal, setModal] = useState(false);

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
    }

    const handleSetProduct = (product) => {
        setProduct(product);
    }

    const handleModalChange = () => {
        setModal( prev => !prev)
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
        }}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreContext;