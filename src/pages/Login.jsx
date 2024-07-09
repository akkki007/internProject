import React, { useState } from "react";


const Login = () => {
  const [form, setForm] = useState({});
  const [message, setMessage] = useState("");

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        if (response.ok) {
            setMessage('Login successful!');
        } else {
            setMessage(data.message || 'Login failed. Please try again.');
        }
    } catch (error) {
        setMessage('An error occurred. Please try again.');
    }
    
  };

  return (
    <div className="bg-zinc-900 h-screen w-full">
      <div className="bg-white mx-[560px] my-28 h-[400px] w-[400px]">
        <h1 className="font-bold text-3xl mx-[160px] pt-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <label className="mx-10">Username :</label>
          <input
            onChange={handleForm}
            type="text"
            name="username"
            className="border rounded-lg border-black w-80 h-10 placeholder:pl-2 mx-10"
          />
          <label className="mx-10">Password :</label>
          <input
            onChange={handleForm}
            type="text"
            name="password"
            className="border rounded-lg border-black w-80 h-10 placeholder:pl-2 mx-10"
          />
          <button
            type="submit"
            className="mx-40 my-5 border border-black px-4 py-2"
          >
            Login
          </button>
        </form>
        {message && <p className='text-center mt-4'>{message}</p>} {/* Conditionally render the message */}
      </div>
    </div>
  );
};

export default Login;
