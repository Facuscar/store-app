import { PrismaClient } from '@prisma/client';

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();

  const categories = await prisma.category.findMany();

  return {
    props: {
      categories,
    },
  };
}

export default function Home({categories}) {
  return (
    <h1>Next.js</h1>
  )
}
