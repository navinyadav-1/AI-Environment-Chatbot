import React from 'react';
import { FaLeaf } from 'react-icons/fa';

export const Header: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 sm:p-8 shadow-lg">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="p-2 bg-white/10 rounded-lg">
            <FaLeaf className="text-white text-3xl animate-bounce-slow" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white text-center">
            Eco Education Chat
          </h1>
        </div>
        <p className="text-emerald-50 text-center text-lg max-w-2xl mx-auto leading-relaxed">
          Your AI guide to environmental awareness and sustainability
        </p>
      </div>
    </div>
  );
};