import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let fromData = {
        email: '',
        passWord: '',
    };

    const [input, setInput] = useState(fromData);

   let navigate= useNavigate();

    function signHandler(e) {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }

    async function submithandler(e) {
        e.preventDefault();
        
        const res = await axios.post('http://localhost:8000/login', input);
        if(res.data.token){
            navigate('/admin')
        }else{
            alert(res.data)
        }
        // console.log(res.data);
        localStorage.setItem('token',res.data.token); 
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
                <h2 className="text-xl font-bold text-center text-gray-800 mb-4">
                    Login Form
                </h2>
                <form onSubmit={submithandler} className="space-y-4">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={signHandler}
                            value={input.email}
                            placeholder="Enter Email..."
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 "
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="passWord"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="passWord"
                            id="passWord"
                            onChange={signHandler}
                            value={input.passWord}
                            placeholder="Enter Password..."
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 "
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
