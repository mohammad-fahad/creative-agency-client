import React, { useContext, useState } from 'react';
import SideBar from './SideBar/SideBar';
import logo from '../../images/logos/logo.png';
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';

const AdminAddService = () => {
    const [file, setFile] = useState(null);
    const {loggedInUser} = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {       
        const formData = new FormData();
        const image = JSON.stringify(data.image)
        formData.append('file', file);
        formData.append('image', image);
        formData.append('name', data.name);
        formData.append('details', data.details);
        fetch('https://creative-agency-server-f.herokuapp.com/addServices', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                
                if(result){
                    alert('Data has been send')
                   
                }
                
            })
            .catch(err => console.log(err))
      
       
    }

    const fileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    return (
        <div>
           
            <div className="d-flex container-fluid p-3">
                <img className="img-fluid" style={{ height: '8vh' }} src={logo} alt="" />
                <h4 style={{ marginLeft: "10vw" }}>Add Services</h4>
                <h5 className="ml-auto">Welcome {loggedInUser.name}</h5>
            </div>
           <SideBar />
           <main className="container container-fluid " style={{ marginLeft: '23vw', width: '70vw', marginTop: '5%' }}>
                {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
                <form onSubmit={handleSubmit(onSubmit)} >
                    {/* register your input into the hook by invoking the "register" function */}
                    
                    <input name="name" placeholder='service title' ref={register} className="form-control p-4"/>
                  
                    <br/>
                    {/* include validation with required or other standard HTML validation rules */}
                    <input name="details" placeholder="Description" ref={register({ required: true })} className="form-control p-4"/> <br/>
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    <div className="d-flex">
                   
                    <input name="image" type="file" onChange={fileChange} ref={register({ required: true })} className=" p-4"/> 
                    </div>
                    
                    <input type="submit" value="Add"  style={{backgroundColor:"#111430", color:"white", padding:"1% 5%", borderRadius:"5px"}}/> 
                </form>
            </main>

        </div>
    );
};

export default AdminAddService;