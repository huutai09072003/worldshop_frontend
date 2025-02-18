import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../app/appActions';
import { connect } from 'react-redux';

const SignIn = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        // username: '',
        email: '',
        password: ''
        // confirmPassword: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/sign_in', {
                user: {
                    // username: formData.username,
                    email: formData.email,
                    password: formData.password
                }
            });

            if (response.data) {
                navigate('/home');
            }
        } catch (err) {
            setError('Failed to sign up. Please try again.');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                    {/* <div className="mb-4">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div> */}
                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    {/* <div className="mb-6">
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div> */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    logIn,
  };
  // Kết nối component với Redux
export default connect(null, mapDispatchToProps)(SignIn);
