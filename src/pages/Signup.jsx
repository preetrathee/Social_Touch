// SignUpForm.jsx
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const SignUpForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        checkpassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password != formData.checkpassword) {
            alert("both password should be same");
            return

        }
        // Basic validation
        if (!formData.name || !formData.email || !formData.password|| !formData.checkpassword) {
            setError("Please fill in all fields.");
            return;
        }

        setError("");
        console.log("Form submitted:", formData);
        // You can send data to your backend here
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

                {error && <p className="text-red-500 mb-4">{error}</p>}

                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="mt-1 p-2 w-full border rounded"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="mt-1 p-2 w-full border rounded"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-6 relative">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        className="mt-1 p-2 w-full border rounded pr-10"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-9 right-3 cursor-pointer text-gray-600"
                    >
                        {showPassword ? <FaEyeSlash/> : <FaEye />}
                    </span>
                </div>

                <div className="mb-6 relative">
                    <label className="block text-gray-700">Password Confirmation</label>
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="checkpassword"
                        className="mt-1 p-2 w-full border rounded pr-10"
                        value={formData.checkpassword}
                        onChange={handleChange}
                    />
                    <span
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute top-9 right-3 cursor-pointer text-gray-600"
                    >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default SignUpForm;
