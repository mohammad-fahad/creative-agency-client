import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import SideBar from './SideBar/SideBar';




const MakeAdmin = () => {
    const {loggedInUser} = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();

      
      const onSubmit = data => {
        fetch('https://creative-agency-server-f.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('your Add Admin successfully')
                }
            })
        }
    
    return (
        <div>
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9 mt-5">
                    <div className="d-flex justify-content-around">
                        <h2>Add Admin</h2>
                        <h4>{loggedInUser.name}</h4>
                    </div>
                    <form className="container container-fluid" onSubmit={handleSubmit(onSubmit)} style={{ width: '70vw', marginTop: '5%' }}>
                                <input className="form-control" name="email" placeholder="New Admin Email" ref={register({ required: true })} /><br />
                                {errors.email && <span>your email is required<br /></span>}

                                <input class="pr-5 pl-5 bg-dark text-white pt-2 pb-2" style={{borderRadius:"5px"}} type="submit" value="Add Admin"/>
                            </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default MakeAdmin;