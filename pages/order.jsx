import Layout from "../layout/Layout";
import useStore from "../hooks/useStore";
import OrderItem from "../components/OrderItem";

const Order = () => {
    const { order } = useStore();

    return (
        <Layout page='Your order'>
            <h1 className="text-4xl font-black">Your order</h1>
            <p className="text-2xl my-10">Check your order</p>

            {order.length === 0 ? (
                <p className="text-center text-2xl">There are no items in your order</p>
            ) : (
                order.map(item => <OrderItem key={item.id} item={item} />)
            )}
        </Layout>
    );
}

export default Order;