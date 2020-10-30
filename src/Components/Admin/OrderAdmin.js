import React, { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';

const OrderAdmin = () => {
    const [all, setAll] = useState([]);
    const [status, setStatus] = useState('status');

    const options = [
        { value: 'Pending', label: 'Pending' },
        { value: 'On Going', label: 'On Going' },
        { value: 'Done', label: 'Done' }
    ]

    useEffect(() => {
        fetch('https://creative-agency-server-f.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                const da = data.map(d => ({ ...d, status: 'pending' }))

                setAll(da);
            })
    }, [])
    const change = (e, id) => {
        fetch(`https://creative-agency-server-f.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: e.value })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Status updated successfully')
                }
            })
    }
    const defaultOption = options[0];
    return (
        <div>
            <main>

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
                                        <Dropdown options={options} onChange={(e) => { change(e, `${a._id}`) }} value={defaultOption} placeholder="Select an option" />
                                    </td>
                                </tr>)
                        }



                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default OrderAdmin;