import Image from "next/image";

const Category = ({category}) => {

    const { name, icon, id } = category;
    console.log(icon);

    return (
        <li className="flex items-center w-full border p-5 hover:bg-amber-400" >
            <Image width={70} height={70} src={`/assets/img/icono_${icon}.svg`} alt={`SVG Drawn of ${icon}`} className="mr-5" />
            <button type="button" className="text-2xl font-bold hover:cursor-pointer" >{name}</button>
        </li>
    );
}

export default Category;