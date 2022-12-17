import { useRouter } from "next/router";

const STEPS = [
    { step: 1, name: 'Menu', url: '/', progress: 2 },
    { step: 2, name: 'Order', url: '/order', progress: 50 },
    { step: 3, name: 'Checkout', url: '/checkout', progress: 100 },
]

const Steps = () => {
    const router = useRouter();

    const getProgress = () => {
        if (router.pathname === '/') return 2;
        if (router.pathname === '/order') return 50;
        return 100;
    }

    return (
        <>
            <div className="flex justify-between mb-5">
                {STEPS.map( step => (
                    <button className="text-2xl font-bold" key={step.step} onClick={() => {
                        router.push(step.url);
                    }} >
                        {step.name}
                    </button>
                ))}
            </div>
            <div className="bg-gray-100 mb-10">
                <div className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white w-10" style={ {width: `${getProgress()}%` } }></div>
            </div>
        </>
    );
}

export default Steps;