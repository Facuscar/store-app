import { PrismaClient } from '@prisma/client';

const handler = async (req, res) => {
  const prisma = new PrismaClient();
  const categories = await prisma.category.findMany({
    include: {
      products: true,
    }
  });

  res.status(200).json(categories);
}

export default handler;
