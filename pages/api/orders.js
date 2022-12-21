import { PrismaClient } from "@prisma/client";

const handler = async (req, res) => {
    const prisma = new PrismaClient();

    if (req.method === "POST") {
        const order = await prisma.order.create({
            data: {
                name: req.body.name,
                total: req.body.total,
                order: req.body.order,
                date: req.body.date,
            }
        })
        res.status(200).json({ order });
        return;
    }

    const orders = await prisma.order.findMany({
        where: {
            state: false,
        },
    })

    res.status(200).json(orders);
}

export default handler;