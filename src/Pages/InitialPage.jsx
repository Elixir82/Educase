import React from 'react'
import { useNavigate } from 'react-router-dom'
function Initialpage() {
    let Navigate = useNavigate();
    return (
        <>
            <div className="bg-gray-100 flex justify-center items-end min-h-screen">

                <div className="max-w-lg p-6 bg-white rounded-lg shadow-md">
                    <h1 className="text-[28px] leading-[17px] text-left tracking-[0px] text-[#1D2226] opacity-100 font-bold">
                        Welcome to PopX
                    </h1>
                    <p className="mt-4 text-gray-500 text-lg">
                        Lorem ipsum dolor sit amet
                        <br /> consectetur, adipisicing elit.
                    </p>
                    <button onClick={() => Navigate("/signup")} className="mt-6 px-6 py-2 w-full bg-[#6C25FF] text-white rounded-md cursor-pointer">
                        Create Account
                    </button>
                    <button onClick={() => Navigate("/login")} className="mt-3 px-6 py-2 w-full bg-[#6C25FF4B] text-[#1D2226] rounded-md cursor-pointer">
                        Already Registered? Login
                    </button>
                </div>

            </div>
        </>
    )
}

export default Initialpage