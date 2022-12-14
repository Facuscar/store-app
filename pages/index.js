import Layout from "../layout/Layout"
import useStore from "../hooks/useStore"
import Product from "../components/Product";

export default function Home() {

  const { currentCategory } = useStore();

  return (
    <Layout page={`${currentCategory?.name} menu`}>
      <h1 className="text-4xl font-black" >{currentCategory?.name}</h1>
      <p className="text-2xl my-10">Choose and customize your order</p>

      <div className="grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {currentCategory?.products?.map( product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
     
    </Layout>
  )
}
