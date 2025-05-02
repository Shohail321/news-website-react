import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    
    return (
        <div className="flex flex-col w-3/12 mx-auto p-5 bg-white mt-30  shadow-md rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                <p className="text-sm dark:text-gray-600">Sign up for your account</p>
            </div>
            <form noValidate="" action="" className="space-y-12">
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm">UserName</label>
                        <input type="text" name="name" id="name" placeholder="Leo Jenkins" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm">Password</label>
                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block mb-2 text-sm">Confirm Password</label>
                        <input type="confirmPassword" name="confirmPassword" id="confirmPassword" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                </form>

                <div className="space-y-2">
                    <div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-amber-600 text-gray-50 hover:bg-green-500 cursor-pointer">Sign Up</button>
                    </div>
                    <p className="px-6 text-sm text-center dark:text-gray-600">Already have an account !!<br></br>
                        <a rel="noopener noreferrer" href="#" className="hover:underline text-amber-600"> Sign In</a>.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Register;