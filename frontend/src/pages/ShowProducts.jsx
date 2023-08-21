import React, {useEffect, useState} from 'react'
import axios from 'axios';

import {Link} from 'react-router-dom';

const endpoint = 'http://localhost:8000/api';

const ShowProducts = () => {
    const [ products, setProducts ] = useState ( [] );
    useEffect ( () => { 
        getAllProducts()
    }, [])

    const getAllProducts = async () => {
        const response = await axios.get(`${endpoint}/products`);

        setProducts(response.data);
    }

    const deleteProduct = async (id) => {
        await axios.delete(`${endpoint}/product/${id}`);
        getAllProducts();
    }

    return (
        <div className='m-[4rem]'>
            <div className='my-8 w-full'>
                <Link to="/create" className='btn flex m-4 item-center justify-center hover:bg-transparent hover:text-primaryColor hover:border-primaryColor border hover:shadow-sm'>Create</Link>
            </div>
            <div className='overflow-x-auto'>
                <table className="container mx-auto p-4 mb-[4rem]">
                    <thead >
                        <tr>
                            <th className='border-4 px-4 py-2 bg-gray-100'>Description</th>
                            <th className='border-4 px-4 py-2 bg-gray-100'>Price</th>
                            <th className='border-4 px-4 py-2 bg-gray-100'>Stock</th>
                            <th className='border-4 px-4 py-2 bg-gray-100'>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        { products.map((product) => (
                            <tr key={product.id} >
                                <td className='border px-4 py-2 text-center'> {product.description} </td>
                                <td className='border px-4 py-4 text-center'> {product.price} </td>
                                <td className='border px-4 py-2 text-center'> {product.stock} </td>
                                <td className='border'>
                                    <div className='flex items-center'>
                                    <Link to={`/edit/${product.id}`} className='btn  bg-green-500 m-4 hover:bg-transparent hover:text-green-500 hover:border-green-500 border hover:shadow-sm'>Edit</Link>
                                    <button onClick={() => deleteProduct(product.id)} className='btn bg-red-500 mr-4 hover:bg-transparent hover:text-red-500 hover:border-red-500 border hover:shadow-sm'>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ShowProducts