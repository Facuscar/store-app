import Layout from "../layout/Layout"
import useStore from "../hooks/useStore"

export default function Home({categories}) {

  const { currentCategory } = useStore();

  return (
    <Layout page={`${currentCategory?.name} menu`}>
      <h1 className="text-4xl font-black" >{currentCategory?.name}</h1>
      <p className="text-2xl my-10">Choose and customize your order</p>
    </Layout>
  )
}
