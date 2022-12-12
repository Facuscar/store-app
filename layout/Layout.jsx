import Head from "next/head";
import Sidebar from "../components/Sidebar";

const Layout = ({children, page}) => {
    return (
        <>
            <Head>
                <title>Coffee Store - {page}</title>
                <meta name="description" content="Coffee Store" />
            </Head>
            <div className="md:flex">
                <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
                    <Sidebar />
                </aside>
                <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                    <div className="pt-10">
                        {children}
                    </div>
                </main>
            </div>
        </>
    );
}

export default Layout;