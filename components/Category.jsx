import Image from "next/image";
import useStore from "../hooks/useStore";

const Category = ({category}) => {

    const { name, icon, id } = category;
    const { currentCategory, handleCategoryClick } = useStore();

    return (
        <li 
            className={` ${currentCategory?.id === id ? 'bg-amber-400' : ''} flex items-center w-full border p-5 hover:bg-amber-400 hover:cursor-pointer`} 
            onClick={() => handleCategoryClick(id)}
        >
            <Image width={70} height={70} src={`/assets/img/icono_${icon}.svg`} alt={`SVG Drawn of ${icon}`} className="mr-5" />
            <button type="button" className="text-2xl font-bold" >{name}</button>
        </li>
    );
}

export default Category;