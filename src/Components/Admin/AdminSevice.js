import React, { useContext, useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logos/logo.png';
import SideBar from './SideBar/SideBar';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const AdminSevice = () => {
    const [all, setAll] = useState([]);
    const [admin, setAdmin] = useState({});
    const { id } = useParams();
    const [status, setStatus] = useState('status');



    const [file, setFile] = useState(null);
    const { loggedInUser, newOrder, setNewOrder, setLoggedInUser } = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const history = useHistory();


    useEffect(() => {
        fetch(`http://localhost:5000/admin?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    const newUser = { ...loggedInUser };
                    newUser.setUser = true;
                    console.log(newUser);
                    setLoggedInUser(newUser)
                }
                else {
                    const newUser = { ...loggedInUser };
                    newUser.setUser = false;
                    setLoggedInUser(newUser)
                }
            })
    }, [])


    const onSubmit = (data) => {
        const formData = new FormData();
        const image = JSON.stringify(data.image)
        formData.append('file', file);
        formData.append('image', image);
        formData.append('service', newOrder.name);
        formData.append('price', data.price);
        formData.append('email', loggedInUser.email);
        formData.append('name', loggedInUser.name);
        formData.append('description', data.description);
        fetch('http://localhost:5000/placeOrder', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {

                if (result) {
                    alert('Data has been send')
                    history.replace('/ServiceList')
                }

                // console.log(result);
            })
            .catch(err => console.log(err))
        // console.log(formData);
        // data.preventDefault();

    }
    useEffect(() => {
        fetch(`http://localhost:5000/order/${id}`)
            .then(res => res.json())
            .then(data => setNewOrder(data))
    }, [])

    const fileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    // console.log(admin);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                const da = data.map(d => ({...d, status: 'pending'}))
                console.log(da);
                setAll(da);
            })
    }, [])
    useEffect(() => {
        fetch(`http://localhost:5000/admin?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [])
    const change = (id, status) => {
        let final = all.find(f => f._id === id)
        final.status = status;
        console.log(final);
       const manik =  all.map(al => {
            if(all._id == final._id){
                all.status = final.status;
                
            }
            return al;
        })
        setAll(manik);
    }
    
    return (
        <div>
            <div className="d-flex container-fluid p-3">
                <img className="img-fluid" style={{ height: '8vh' }} src={logo} alt="" />
                <h4 style={{ marginLeft: "10vw" }}>Order</h4>
                <h5 className="ml-auto">Welcome {loggedInUser.name}</h5>
            </div>
            <SideBar />
            {loggedInUser.setUser ? <main>

                <table className="table" style={{ marginLeft: '23vw', width: '70vw', marginTop: '5%' }}>
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
                                    <td>{a.name}</td>
                                    <td>{a.email}</td>
                                    <td>{a.service}</td>
                                    <td>{a.description}</td>
                                    <td >
                                        <Dropdown>
                                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                {a.status}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1" className="text-success" onClick={() => change(a._id, 'Done')}>Done</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2" className="text-warning" onClick={() => change(a._id, 'On Progress')}>On Process</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3" className="text-danger" onClick={() => change(a._id, 'Pending')}>Pending</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>)
                        }



                    </tbody>
                </table>
            </main> :
                <main className="container container-fluid ">
                    {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
                    <form onSubmit={handleSubmit(onSubmit)} >
                        {/* register your input into the hook by invoking the "register" function */}

                        <input name="name" defaultValue={loggedInUser.name} ref={register} className="form-control p-4" />
                        <br />
                        {/* include validation with required or other standard HTML validation rules */}
                        <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} className="form-control p-4" /> <br />
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input name="service" defaultValue={newOrder.name} ref={register} className="form-control p-4" />
                        <br />
                        {/* include validation with required or other standard HTML validation rules */}
                        <input name="description" placeholder="Description" ref={register({ required: true })} className="form-control p-4" /> <br />
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}
                        <div className="d-flex">
                            <input name="price" placeholder="Price" ref={register({ required: true })} className="form-control p-4" />
                            <input name="image" type="file" onChange={fileChange} ref={register({ required: true })} className=" p-4" />
                        </div>

                        <input type="submit" value="Send" style={{ backgroundColor: "#111430", color: "white", padding: "1% 5%", borderRadius: "5px" }} />
                    </form>
                </main>}

        </div>
    );
};

export default AdminSevice;