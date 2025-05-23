import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup } from '../../Store/authSlice';

export default function Signuppage() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [phone, setPhone] = useState("");
  let [company, setCompany] = useState("");
  let [radio, setRadio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup({ name, email, password, phone }));
    if (name && email && password && phone && radio) {
      navigate('/profile');
    }
    // console.log('Form submitted');
  };

  return (
    <div className="flex relative flex-col items-center justify-center min-h-screen bg-white">
      <div className="bg-white p-8 rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Create your <br /> PopX account</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              id="full-name"
              name="fullName"
              placeholder=" "
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="peer border border-gray-300 rounded w-full px-3 py-3 text-sm text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 bg-white"
            />
            <label
              htmlFor="full-name"
              className="absolute left-2 -top-2 text-xs text-purple-600 bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-transparent peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-purple-600 peer-focus:bg-white"
            >
              Full Name*
            </label>
          </div>

          <div className="relative">
            <input
              type="tel"
              id="phone-number"
              name="phoneNumber"
              placeholder=" "
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
              className="peer border border-gray-300 rounded w-full px-3 py-3 text-sm text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 bg-white"
            />
            <label
              htmlFor="phone-number"
              className="absolute left-2 -top-2 text-xs text-purple-600 bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-transparent peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-purple-600 peer-focus:bg-white"
            >
              Phone number*
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="peer border border-gray-300 rounded w-full px-3 py-3 text-sm text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 bg-white"
            />
            <label
              htmlFor="email"
              className="absolute left-2 -top-2 text-xs text-purple-600 bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-transparent peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-purple-600 peer-focus:bg-white"
            >
              Email address*
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              id="password"
              name="password"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="8"
              title="Password must be at least 8 characters long"
              className="peer border border-gray-300 rounded w-full px-3 py-3 text-sm text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 bg-white"
            />
            <label
              htmlFor="password"
              className="absolute left-2 -top-2 text-xs text-purple-600 bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-transparent peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-purple-600 peer-focus:bg-white"
            >
              Password*
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              id="company-name"
              name="companyName"
              placeholder=" "
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="peer border border-gray-300 rounded w-full px-3 py-3 text-sm text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 bg-white"
            />
            <label
              htmlFor="company-name"
              className="absolute left-2 -top-2 text-xs text-purple-600 bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-transparent peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-purple-600 peer-focus:bg-white"
            >
              Company name
            </label>
          </div>

          {/* Radio Starts */}
          <div>
            <fieldset>
              <legend className="block text-gray-700 text-sm font-bold mb-2">Are you an Agency?*</legend>
              <div className="flex items-center">
                <input
                  className="mr-2"
                  type="radio"
                  id="agency-yes"
                  name="agency"
                  checked={radio === "yes"}
                  onChange={(e) => setRadio(e.target.value)}
                  value="yes"
                  required
                />
                <label className="text-gray-700" htmlFor="agency-yes">Yes</label>
                <input
                  className="ml-4 mr-2"
                  type="radio"
                  id="agency-no"
                  name="agency"
                  checked={radio === "no"}
                  onChange={(e) => setRadio(e.target.value)}
                  value="no"
                  required
                />
                <label className="text-gray-700" htmlFor="agency-no">No</label>
              </div>
            </fieldset>
          </div>

          {/* Submit starts */}
          <div className="flex items-end justify-center">
            <button
              className="bg-[#6C25FF] absolute bottom-6 w-sm text-white font-bold py-2 px-6 rounded focus:outline-none cursor-pointer focus:ring-2"
              type="submit"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}