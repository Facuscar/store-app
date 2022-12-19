import Layout from "../layout/Layout";
import useStore from "../hooks/useStore";

const Checkout = () => {

    const { order, name, handleNameChange } = useStore();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submited');
    }

    return (
        <Layout page='Your order'>
            <h1 className="text-4xl font-black">Checkout</h1>
            <p className="text-2xl my-10">Confirm your order</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block uppercase text-slate-800 font-bold text-xl">Name</label>
                    <input id="name" type="text" className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded" value={name} onChange={e => handleNameChange(e.target.value)} />
                </div>
                <div className="mt-10">
                    <p className="text-2xl">Total: <span className="font-bold">${}</span></p>
                </div>
                <div className="mt-5">
                    <input 
                        className={`${!order.length || !name.length ? 'bg-slate-100' : 'bg-indigo-600'} w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white hover:cursor-pointer`} 
                        type="submit" 
                        value="Confirm order"
                        disabled={!order.length || !name.length}
                    />
                </div>
            </form>
        </Layout>
    );
}

export default Checkout;