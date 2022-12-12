import Image from "next/image";
import useStore from "../hooks/useStore";
import Category from "./Category";

const Sidebar = () => {
    const { categories } = useStore();

    return (
        <>
            <Image width={300} height={100} src="/assets/img/logo.svg" alt="Coffee logo with a coffee drawn in the background" />
            <nav className="mt-10">
                <ul>
                    {categories.map(category => (
                        <Category category={category} key={category.id} />
                    ))}
                </ul>
            </nav>
        </>
    );
}

export default Sidebar;