import React from 'react';

const AdminAddService = () => {
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
        </div>
    );
};

export default AdminAddService;