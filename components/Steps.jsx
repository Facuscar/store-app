import { useRouter } from "next/router";

const STEPS = [
    { step: 1, name: 'Menu', url: '/' },
    { step: 2, name: 'Order', url: '/order' },
    { step: 2, name: 'Checkout', url: '/checkout' },
]

const Steps = () => {
    const router = useRouter();

    return (
        <>
            <div className="flex justify-between mb-5">
                {STEPS.map( step => (
                    <button className="text-2xl font-bold" key={step.step} onClick={() => {
                        router.push(step.url)
                    }} >
                        {step.name}
                    </button>
                ))}
            </div>
        </>
    );
}

export default Steps;