import React from "react";
import './Admin.css'
import Sidebar from "../../Components/Sidebar/Sidebar";
import {Routes,Route} from 'react-router-dom'
import AddProduct from "../../Components/AddProduct/AddProduct";
import ListProduct from "../../Components/ListProduct/ListProduct";

const Admin = () => {
    return (
        <div className="admin">
            <Sidebar />
            
                {/* <div className="content">
                    <h1>Welcome the admin of The Velvet Box</h1>
                </div> */}
            <Routes>
                <Route path="/addproduct" element={<AddProduct/>} />
                <Route path="/listproduct" element={<ListProduct/>} />
            </Routes>
        </div>
    )
}

export default Admin