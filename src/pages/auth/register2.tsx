import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Register = () => {
    const [userType, setUserType] = useState<'student' | 'donor'>('student');

    return (
        <div className="px-[20px] py-[px] flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                <Head>
                    <title>Register - Fund4Future</title>
                </Head>
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Register</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">First Name:</label>
                        <input 
                            type="text" 
                            placeholder="Enter your first name" 
                            required 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Last Name:</label>
                        <input 
                            type="text" 
                            placeholder="Enter your last name" 
                            required 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Email:</label>
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            required 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Password:</label>
                        <input 
                            type="password" 
                            placeholder="Enter your password" 
                            required 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">Sign up as:</label>
                        <select 
                            value={userType} 
                            onChange={(e) => setUserType(e.target.value as 'student' | 'donor')} 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        >
                            <option value="student">Student</option>
                            <option value="donor">Donor</option>
                        </select>
                    </div>
                    {userType === 'student' && (
                        <>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Age:</label>
                                <input 
                                    type="number" 
                                    placeholder="Enter your age" 
                                    required 
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">School:</label>
                                <input 
                                    type="text" 
                                    placeholder="Enter your school" 
                                    required 
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Why are you joining?</label>
                                <textarea 
                                    placeholder="Share your reason for joining" 
                                    required 
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                />
                            </div>
                        </>
                    )}
                    {userType === 'donor' && (
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Type of donation:</label>
                            <select 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            >
                                <option>Personal Donations</option>
                                <option>Corporate Donations</option>
                                <option>Non-profit Organization Donations</option>
                            </select>
                        </div>
                    )}
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Register
                    </button>
                    <p className="text-center text-gray-600 mt-4">
                        Already have an account? <Link href="/auth/login2" className="text-blue-500 hover:underline">Login here</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;