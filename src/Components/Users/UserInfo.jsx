import React, { use } from 'react';

export default function UserInfo({userData, setUserData}) { 

  const handleChange = (event) => {
    console.log(userData)
    const { name, value } = event.target;
    setUserData({
        ...userData,
        [name]: value,
    });
  };

  return (
    <div className="bg-gray-50 p-4 rounded-md shadow-sm h-l">
      <h2 className="text-xl font-medium text-blue-600 mb-4">Informations de Base</h2>

      <div className="grid grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block text-gray-700">Prénom</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Prénom"
            onChange={handleChange}
            className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block text-gray-700">Nom</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Nom"
            onChange={handleChange}
            className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            />
        </div>

        {/* CIN */}
        <div>
          <label htmlFor="idCard" className="block text-gray-700">CIN</label>
          <input
            id="idCard"
            name="idCard"
            type="number"
            placeholder="CIN"
            onChange={handleChange}
            className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-gray-700">Numéro de Téléphone</label>
          <input
            id="phone"
            name="phone"
            type="number"
            placeholder="Numéro de Téléphone"
            onChange={handleChange}
            className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="address" className="block text-gray-700">Adresse</label>
          <input
            id="address"
            name="address"
            type="text"
            placeholder="Adresse"
            onChange={handleChange}
            className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            />
        </div>

        {/* Birthdate */}
        <div>
          <label htmlFor="birthdate" className="block text-gray-700">Date de Naissance</label>
          <input
            id="birthdate"
            name="birthdate"
            type="date"
            placeholder="Date de Naissance"
            onChange={handleChange}
            className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            />
        </div>
      </div>
    </div>
  );
}
