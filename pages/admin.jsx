import useSWR from 'swr';
import axios from 'axios';
import AdminLayout from "../layout/AdminLayout";

const Admin = () => {

    const apiUrl = '/api/orders'

    const fetcher = () => axios(apiUrl).then( data => data.data)

    const { data, error, isLoading } = useSWR(apiUrl, fetcher)

    console.log(data);

    return (
        <AdminLayout page={'Admin'}>
            <h1 className="text-4xl font-black">Admin panel</h1>
            <p className="text-2xl my-10">Manage the orders</p>
        </AdminLayout>
    )
}

export default Admin;