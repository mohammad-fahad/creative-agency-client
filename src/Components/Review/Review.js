import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import logo from '../../images/logos/logo.png';

const Review = () => {
    const { loggedInUser } = useContext(UserContext);
    const [review, setReview] = useState([]);
    const { register, handleSubmit, watch, errors } = useForm();
    
    const onSubmit = data => {
        const img = {...loggedInUser, ...data};
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(img)
        })
        .then(res => res.json(img))
        .then(result => {
            if(result) {
                alert('Your review has been updated successfully')
            }
        })
        
        
    };
    return (
        <div>
            <div className="d-flex container-fluid p-3 ">
                <img className="img-fluid " style={{ height: '8vh' }} src={logo} alt="" />
                <h4 style={{ marginLeft: "10vw" }}>Review</h4>
                <h5 className="ml-auto">{loggedInUser.name}</h5>
            </div>
            <aside className='mt-5 sidebar'>
                <div className="d-flex mt-3">
                    <i class="fas fa-shopping-cart pl-5 mr-2"></i>
                    <h6> Order</h6>
                </div>
                <div className="d-flex mt-3">
                    <i class="fas fa-shopping-basket pl-5 mr-2"></i>
                    <h6> Service list</h6>
                </div>
                <div className="d-flex mt-3">
                    <i class="fas fa-comment-dots fa-flip-horizontal pr-5 mr-2"></i>
                    <h6> Review</h6>
                </div>
            </aside>
            <main >
                <form className="container container-fluid" onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input name="name" className="p-4 form-control" defaultValue={loggedInUser.name} ref={register} /> <br/>

                    {/* include validation with required or other standard HTML validation rules */}
                    <input name="designation" className="p-4 form-control" placeholder="Your Company's name, designation" ref={register({ required: true })} /> <br/>
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                     <input name="comment" class="form-control" placeholder='Description' style={{height:"20vh"}} ref={register} /> <br/>

                    <input class="pr-5 pl-5 bg-dark text-white pt-2 pb-2" style={{borderRadius:"5px"}} type="submit" />
                </form>
            </main>
        </div>
    );
};

export default Review;