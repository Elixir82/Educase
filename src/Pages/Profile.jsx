import React from 'react';
import { useSelector } from 'react-redux';
export default function AccountSettings() {
  let {name,email}=useSelector((state)=>(state.auth.userData||{}));
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto">
        
        <h1 className="text-lg font-medium text-gray-800 mb-6">Account Settings</h1>
        
        
        <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
          
          <div className="flex items-center mb-4">
            <div className="relative">
              
              <img 
                src="/wp10541459-batman-2022-movie-wallpapers.jpg" 
                alt="Profile" 
                className="w-12 h-12 rounded-full bg-gray-200 object-cover"
              />
              
              <div className="absolute -bottom-1 -right-1 w-6 h-6  rounded-full flex items-center justify-center">
                <img src="/Group 1585.svg" alt="Verification" className="w-5 h-5" />
              </div>
            </div>
            
            <div className="ml-4">
              <h2 className="text-base font-semibold text-gray-900">{name}</h2>
              <p className="text-sm text-gray-600">{email}</p>
            </div>
          </div>
          
         
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, 
            Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore 
            Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
}