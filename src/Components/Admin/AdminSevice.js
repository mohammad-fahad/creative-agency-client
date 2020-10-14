import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import logo from '../../images/logos/logo.png';

const AdminSevice = () => {
    const [all, setAll] = useState([]);
    const [admin, setAdmin] = useState({});
    // console.log(admin);
    const {loggedInUser} = useContext(UserContext);
    useEffect (() =>{
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setAll(data))
    }, [])
    useEffect (() =>{
        fetch(`http://localhost:5000/admin?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data))
    },[])
    return (
        <div>
            <div className="d-flex container-fluid p-3">
                <img className="img-fluid" style={{ height: '8vh' }} src={logo} alt="" />
                <h4 style={{ marginLeft: "10vw" }}>Order</h4>
                <h5 className="ml-auto">Welcome Admin</h5>
            </div>
            <aside className='mt-5'>
                <div className="d-flex mt-3">
                    <i class="fas fa-shopping-basket pl-5 mr-2"></i>
                    <h6> Service list</h6>
                </div>
                <div className="d-flex mt-3">
                    <i class="fa fa-plus pl-5 mr-2" aria-hidden="true"></i>
                    <h6> Add Service</h6>
                </div>
                <div className="d-flex mt-3">
                <i class="fa fa-user-plus pl-5 mr-2" aria-hidden="true"></i>
                    <h6> Make Admin</h6>
                </div>
            </aside>
            <main>
                {admin && admin.email ? <h1>Admin</h1>: <h1>Normal</h1>}
                <table className="table" style={{ marginLeft: '23vw', width: '70vw', marginTop: '-5vw' }}>
                    <thead className="thead-dark">
                        <tr>

                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Service</th>
                            <th scope="col">Project Details</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            all.map(a =>
                                <tr className="bg-light" key={a._id}>
                                    <td>{a.Name}</td>
                                    <td>{a.email}</td>
                                    <td>{a.service}</td>
                                    <td>{a.description}</td>
                                    <td ></td>
                                </tr>)
                        }



                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default AdminSevice;