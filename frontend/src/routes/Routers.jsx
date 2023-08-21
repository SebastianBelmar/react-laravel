import CreateProduct from "../pages/CreateProduct";
import EditProduct from "../pages/EditProduct";
import ShowProducts from "../pages/ShowProducts";

import {Routes, Route} from 'react-router-dom';

const Routers = () => {
    return <Routes>
        <Route path="/" element={<ShowProducts/>}/>
        <Route path="/create" element={<CreateProduct/>}/>
        <Route path="/edit/:id" element={<EditProduct/>}/>
    </Routes>;
}

export default Routers;