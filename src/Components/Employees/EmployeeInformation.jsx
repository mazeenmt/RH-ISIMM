"use client";

import React, { useState } from "react";

export default function FicheEmploye() {
  const [isEditing, setIsEditing] = useState(false);
  const [employee, setEmployee] = useState({
    firstName: "Ali",
    lastName: "Ben Salah",
    cin: "12345678",
    phone: "+216 98 765 432",
    email: "ali.bensalah@example.com",
    birthdate: "1985-06-15",
    position: "Professeur",
    department: "Informatique",
    hireDate: "2010-09-01",
    salary: "3500 TND",
    status: "Actif",
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => setIsEditing(false);

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Fiche Employé
        </h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            <label className="block text-gray-700">Prénom</label>
            <input
              type="text"
              name="firstName"
              value={employee.firstName}
              onChange={handleChange}
              className={`mt-1 px-4 py-2 w-full border ${
                isEditing ? "border-gray-400" : "border-transparent"
              } rounded-md focus:outline-none focus:ring-2 ${
                isEditing ? "focus:ring-blue-500" : "bg-gray-100"
              }`}
              disabled={!isEditing}
            />

            <label className="block text-gray-700 mt-4">Nom</label>
            <input
              type="text"
              name="lastName"
              value={employee.lastName}
              onChange={handleChange}
              className={`mt-1 px-4 py-2 w-full border ${
                isEditing ? "border-gray-400" : "border-transparent"
              } rounded-md focus:outline-none focus:ring-2 ${
                isEditing ? "focus:ring-blue-500" : "bg-gray-100"
              }`}
              disabled={!isEditing}
            />

            <label className="block text-gray-700 mt-4">CIN</label>
            <input
              type="text"
              name="cin"
              value={employee.cin}
              onChange={handleChange}
              className={`mt-1 px-4 py-2 w-full border ${
                isEditing ? "border-gray-400" : "border-transparent"
              } rounded-md focus:outline-none focus:ring-2 ${
                isEditing ? "focus:ring-blue-500" : "bg-gray-100"
              }`}
              disabled={!isEditing}
            />
          </div>

          {/* Right Column */}
          <div>
            <label className="block text-gray-700">Numéro de Téléphone</label>
            <input
              type="text"
              name="phone"
              value={employee.phone}
              onChange={handleChange}
              className={`mt-1 px-4 py-2 w-full border ${
                isEditing ? "border-gray-400" : "border-transparent"
              } rounded-md focus:outline-none focus:ring-2 ${
                isEditing ? "focus:ring-blue-500" : "bg-gray-100"
              }`}
              disabled={!isEditing}
            />

            <label className="block text-gray-700 mt-4">Email</label>
            <input
              type="email"
              name="email"
              value={employee.email}
              onChange={handleChange}
              className={`mt-1 px-4 py-2 w-full border ${
                isEditing ? "border-gray-400" : "border-transparent"
              } rounded-md focus:outline-none focus:ring-2 ${
                isEditing ? "focus:ring-blue-500" : "bg-gray-100"
              }`}
              disabled={!isEditing}
            />

            <label className="block text-gray-700 mt-4">Date de Naissance</label>
            <input
              type="date"
              name="birthdate"
              value={employee.birthdate}
              onChange={handleChange}
              className={`mt-1 px-4 py-2 w-full border ${
                isEditing ? "border-gray-400" : "border-transparent"
              } rounded-md focus:outline-none focus:ring-2 ${
                isEditing ? "focus:ring-blue-500" : "bg-gray-100"
              }`}
              disabled={!isEditing}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-4">
          {!isEditing ? (
            <button
              onClick={handleEdit}
              className="px-4 py-2 bg-blue-500 text-white cursor-pointer rounded-md hover:bg-blue-600"
            >
              Modifier
            </button>
          ) : (
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-500 text-white cursor-pointer rounded-md hover:bg-green-600"
            >
              Enregistrer
            </button>
          )}
            <button
              className="px-4 py-2 bg-red-500 text-white cursor-pointer rounded-md hover:bg-red-600"
            >
              Supprimer
            </button>
        </div>
      </div>
    </div>
  );
}
