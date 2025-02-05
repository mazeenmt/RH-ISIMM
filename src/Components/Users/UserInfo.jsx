import React from 'react';

export default function UserInfo() {
  return (
    <div className="bg-gray-50 p-4 rounded-md shadow-sm h-l">
      <h2 className="text-xl font-medium text-blue-600 mb-4">Informations de Base</h2>

      <div className="grid grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block text-gray-700">Prénom</label>
          <input
            id="firstName"
            type="text"
            placeholder="Prénom"
            className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block text-gray-700">Nom</label>
          <input
            id="lastName"
            type="text"
            placeholder="Nom"
            className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* CIN */}
        <div>
          <label htmlFor="idCard" className="block text-gray-700">CIN</label>
          <input
            id="idCard"
            type="number"
            placeholder="CIN"
            className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-gray-700">Numéro de Téléphone</label>
          <input
            id="phone"
            type="number"
            placeholder="Numéro de Téléphone"
            className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Birthdate */}
        <div>
          <label htmlFor="birthdate" className="block text-gray-700">Date de Naissance</label>
          <input
            id="birthdate"
            type="date"
            placeholder="Date de Naissance"
            className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>
    </div>
  );
}
