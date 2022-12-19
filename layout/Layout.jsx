import Head from "next/head";
import Sidebar from "../components/Sidebar";
import ProductModalContent from "../components/ProductModal";
import Steps from "../components/Steps";
import useStore from "../hooks/useStore";
import ReactModal from "react-modal";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

const Layout = ({children, page}) => {

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

      ReactModal.setAppElement('#__next');

      const { modal } = useStore();

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
                <main className="ml-5 md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                    <div className="pt-10">
                        <Steps />
                        {children}
                    </div>
                </main>
            </div>
            { modal && 
                <ReactModal isOpen={modal} style={customStyles}>
                    <ProductModalContent />
                </ReactModal>}

            <ToastContainer />
        </>
    );
}

export default Layout;