import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Store/authSlice";
export default function LoginPage() {
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ password, email }));
    if (email && password) {
      navigate('/profile');
    }
    // console.log('Login clicked');
  };

  return (
    <div className="flex items-start justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Signin to your <br /> PopX account</h1>
        <p className="text-gray-500 mb-6 text-sm">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </p>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email starts */}
          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder=" "
              onChange={(e) => (setEmail(e.target.value))}
              className="peer w-full px-3 py-3 border border-gray-300 rounded-md text-sm text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 bg-white"
            />
            <label
              htmlFor="email"
              className="absolute left-2 -top-2 text-xs text-purple-600 bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-transparent peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-purple-600 peer-focus:bg-white"
            >
              Email Address
            </label>
          </div>

          {/* Password stats */}
          <div className="relative">
            <input
              type="password"
              id="password"
              placeholder=" "
              onChange={(e) => (setPassword(e.target.value))}
              className="peer w-full px-3 py-3 border border-gray-300 rounded-md text-sm text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 bg-white"
            />
            <label
              htmlFor="password"
              className="absolute left-2 -top-2 text-xs text-purple-600 bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-transparent peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-purple-600 peer-focus:bg-white"
            >
              Password
            </label>
          </div>

          {/* Submit starts */}
          <button
            type="submit"
            className="w-full py-3 text-white font-semibold rounded bg-gray-300 cursor-pointer"
            disabled={!email || !password}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
