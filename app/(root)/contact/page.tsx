"use client";

import React from 'react'
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
<motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen flex justify-center items-center"
    >
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="mt-1 p-2 block w-full rounded-md border-gray-300" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 p-2 block w-full rounded-md border-gray-300" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" id="phone" name="phone" className="mt-1 p-2 block w-full rounded-md border-gray-300" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" rows={4} className="mt-1 p-2 block w-full rounded-md border-gray-300"></textarea>
          </div>
          <button type="submit" className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition duration-300">Send Message</button>
        </form>
      </div>
    </motion.div>
);
};

export default ContactPage