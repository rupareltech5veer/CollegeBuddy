import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                <Head>
                    <title>Login - Fund4Future</title>
                </Head>
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h2>
                <p className="text-center text-gray-600 mb-6">
                    Welcome back! Please login to your account.
                </p>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Email:</label>
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            required 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">Password:</label>
                        <input 
                            type="password" 
                            placeholder="Enter your password" 
                            required 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-[#444] text-white p-3 rounded-lg hover:bg-blue-600"
                    >
                        Login
                    </button>
                    <p className="text-center text-gray-600 mt-4">
                        Don't have an account? <Link href="/auth/register2" className="text-blue-500 hover:underline">Register a new account!</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
