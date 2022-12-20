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
        res.json({ order });
    }
}

export default handler;