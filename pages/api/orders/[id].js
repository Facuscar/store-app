import { PrismaClient } from "@prisma/client";

const handler = async (req, res) => {
    const prisma = new PrismaClient();

    if (req.method === 'POST') {
        const { id } = req.query;

        const updatedOrder = await prisma.order.update({
            where: {
                id: parseInt(id)
            }, 
            data: {
                state: true,
            }
        });

        res.status(200).json(updatedOrder);
    }
}

export default handler;