import { useState, useEffect, createContext } from "react";
import axios from "axios";

const StoreContext = createContext();

export const StoreProvider = ({children}) => {
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState({});

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

    return (
        <StoreContext.Provider value={{
            categories,
            currentCategory,
            handleCategoryClick
        }}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreContext;