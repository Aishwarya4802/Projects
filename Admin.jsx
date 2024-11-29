import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {

    async function fun() {
        let token = localStorage.getItem('token')
        // console.log(token);

        const res = await axios.get('http://localhost:8000/admin', {
            headers: {
                "Authorization": ` ${token}`,
            }
        });

        console.log(res.data);

    }

    return (
        <div>
            <button onClick={fun} style={{ border: '1px solid black', background: 'royalblue', color: 'white', cursor: 'pointer', margin: '5px', padding: '2px 20px' }}>Adminn</button> <br />
            <button onClick={fun} style={{ border: '1px solid black', background: 'royalblue', color: 'white', cursor: 'pointer', margin: '5px', padding: '1px 20px' }}>User</button> <br />
        </div>
    );
};

export default Admin;
