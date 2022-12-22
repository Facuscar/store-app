const Order = ({order}) => {

    const { id, name, total, order: items } = order;

    return (
        <div className="border p-10 space-y-5">
            <h3 className="text-2xl font-bold">Id: {id}</h3>
            <p className="text-lg my-10">Costumer: {name}</p>
        </div>
    );
}

export default Order;