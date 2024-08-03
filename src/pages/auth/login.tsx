import React from 'react';

const Login = () => {
    return (
        <div className="auth-container w-[300px] m-[0_auto] p-[20px] border border-solid rounded-[10px] border-[#ccc] shadow-[2px_2px_5px_rgba(0,0,0,0.1)]">
            <h2 className='text-center mb-[20px]'>Login</h2>
            <form>
                <div className="form-group mb-[15px]">
                    <label className='mb-[5px]'>Email:</label>
                    <input type="email" placeholder="Enter your email" required className='w-full p-[8px] border border-solid border-[#ccc] rounded-[5px]'/>
                </div>
                <div className="form-group mb-[15px]">
                    <label className='mb-[5px]'>Password:</label>
                    <input type="password" placeholder="Enter your password" required className='w-full p-[8px] border border-solid border-[#ccc] rounded-[5px]'/>
                </div>
                <button type="submit" className="auth-button w-full bg-[#444] text-[#fff] cursor-pointer p-[10px] rounded-[5px] border-none hover:bg-[#555]">Login</button>
            </form>
        </div>
    );
};

export default Login;