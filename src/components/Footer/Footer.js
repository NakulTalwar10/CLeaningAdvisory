import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <div>
     <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <p className="text-xl text-white hover:text-gray-300">
            <FaFacebook />
          </p>
          <p className="text-xl text-white hover:text-gray-300">
            <FaTwitter />
          </p>
          <p className="text-xl text-white hover:text-gray-300">
            <FaInstagram />
          </p>
        </div>
        <p className="text-gray-300">&copy; 2023 Cleaning Advisory. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer