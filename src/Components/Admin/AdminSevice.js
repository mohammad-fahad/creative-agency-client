import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logos/logo.png';
import SideBar from './SideBar/SideBar';

import 'react-dropdown/style.css';
import OrderAdmin from './OrderAdmin';



const AdminSevice = () => {    
    const [admin, setAdmin] = useState({});
    const { id } = useParams();
    




    const [file, setFile] = useState(null);
    const { loggedInUser, newOrder, setNewOrder, setLoggedInUser } = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const history = useHistory();


    useEffect(() => {
        fetch(`https://creative-agency-server-f.herokuapp.com/admin?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
               
                if (data) {
                    const newUser = { ...loggedInUser };
                    newUser.setUser = true;
                    
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
        fetch('https://creative-agency-server-f.herokuapp.com/placeOrder', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {

                if (result) {
                    alert('Data has been send')
                    history.replace('/ServiceList')
                }

               
            })
            .catch(err => console.log(err))
       
    }
    useEffect(() => {
        fetch(`https://creative-agency-server-f.herokuapp.com/order/${id}`)
            .then(res => res.json())
            .then(data => setNewOrder(data))
    }, [])

    const fileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
   


    useEffect(() => {
        fetch(`https://creative-agency-server-f.herokuapp.com/admin?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data))

    }, [])


    return (
        <div>
            <div className="d-flex container-fluid p-3">
                <img className="img-fluid" style={{ height: '8vh' }} src={logo} alt="" />
                <h4 style={{ marginLeft: "10vw" }}>Order</h4>
                <h5 className="ml-auto">Welcome {loggedInUser.name}</h5>
            </div>
            <SideBar />
            {loggedInUser.setUser ? <OrderAdmin /> :
                <main className="container container-fluid " style={{ position: "relative", top: "0" }}>
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