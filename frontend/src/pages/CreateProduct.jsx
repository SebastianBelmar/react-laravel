import axios from 'axios';
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api';

const CreateProduct = () => {
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault()
        await axios.post(`${endpoint}/product`, {description: description, price: price, stock: stock})
        navigate('/')
    }

    return (
        <div className='m-[4rem]'>
            <Link to={`/`} className='btn bg-gray-500 hover:bg-transparent hover:text-gray-500 hover:border-gray-500 border hover:shadow-sm'>Volver</Link>
            <h1 className='text-2xl font-bold ml-4 mb-4 mt-8'>Create Product</h1>
            <div className='bg-gray-300 py-[4rem] rounded-[2rem]'>
                <form onSubmit={store}>
                    <div className='mb-3'>
                        <label className='block ml-4 text-sm font-medium text-gray-700'>Description</label>
                        <input
                            value={description}
                            onChange={ (e) => setDescription(e.target.value)}
                            type='text'
                            className='w-[90%] ml-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 bg-gray-100'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='block ml-4 text-sm font-medium text-gray-700'>Price</label>
                        <input
                            value={price}
                            onChange={ (e) => setPrice(e.target.value)}
                            type='number'
                            className='w-[90%] ml-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 bg-gray-100'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='block ml-4 text-sm font-medium text-gray-700'>Stock</label>
                        <input
                            value={stock}
                            onChange={ (e) => setStock(e.target.value)}
                            type='number'
                            className='w-[90%]  ml-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 bg-gray-100'
                        />
                    </div>
                    <button type="submit" className="btn flex w-[90%] justify-center ml-4 mt-[2rem]
                    hover:bg-transparent hover:text-primaryColor hover:border-primaryColor border hover:shadow-sm">Store</button>
                </form>
            </div>
        </div>
    )
}

export default CreateProduct