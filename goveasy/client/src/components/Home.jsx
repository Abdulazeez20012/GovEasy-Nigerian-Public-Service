import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">GovEasy</h1>
      <div className="space-x-4">
        <Link
          to="/login"
          className="px-4 py-2 text-white bg-blue-600 rounded"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-4 py-2 text-white bg-green-600 rounded"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
