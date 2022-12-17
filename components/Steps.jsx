const STEPS = [
    { step: 1, name: 'Menu', url: '/' },
    { step: 2, name: 'Order', url: '/order' },
    { step: 2, name: 'Checkout', url: '/checkout' },
]

const Steps = () => {
    return (
        <>
            <div className="flex justify-between mb-5">
                {STEPS.map( step => (
                    <button className="text-2xl font-bold" key={step.step}>
                        {step.name}
                    </button>
                ))}
            </div>
        </>
    );
}

export default Steps;