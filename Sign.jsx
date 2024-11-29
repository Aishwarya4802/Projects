import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Sign = () => {
    const formData = {
        firstName: '',
        lastName: '',
        email: '',
        passWord: '',
    };

    const [input, setInput] = useState(formData);
    let  navigate=  useNavigate();

    function signHandler(e) {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }

    async function submithandler(e) {
        e.preventDefault();
        let res = await axios.post('http://localhost:8000/create', input);
        console.log('Response:', res.name.status);

        // if(res.status)
        navigate('/login');
    }

    

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                    Register Form
                </h2>
                <form onSubmit={submithandler} className="space-y-4">
                    <div>
                        <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-gray-600"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            onChange={signHandler}
                            value={input.firstName}
                            placeholder="Enter First Name..."
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 "
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            onChange={signHandler}
                            value={input.lastName}
                            placeholder="Enter Last Name..."
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 "
                            required
                        />
                    </div>
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
                        Register
                    </button>
                </form>
                <p>Have an Account ??
                    <Link to={"/login"} className='underline text-blue-500'> Login Here</Link>
                </p>
            </div>
        </div>
    );
};

export default Sign;
