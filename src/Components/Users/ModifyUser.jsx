import React from 'react';
import UserInfo from './UserInfo';

export default function ModifyUser() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Gestion des Informations Utilisateur
        </h1>
        <form className="space-y-6">
          {/* Including UserInfo component */}
          {/* <UserInfo /> */}

          {/* User Role Section */}
          <div className="bg-gray-50 p-4 rounded-md shadow-sm">
            <h2 className="text-xl font-medium text-blue-600 mb-4">Rôle de l'Utilisateur</h2>
            <div className="flex items-center">
              <label htmlFor="role" className="mr-4 text-gray-700">
                Sélectionner un Rôle:
              </label>
              <select
                id="role"
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="admin">Administrateur</option>
                <option value="student">Responsable RH</option>
                <option value="teacher">Enseignant</option>
                <option value="employee">Employé</option>
              </select>
            </div>
          </div>

          {/* Security Settings Section */}
          <div className="bg-gray-50 p-4 rounded-md shadow-sm">
            <h2 className="text-xl font-medium text-blue-600 mb-4">Paramètres de Sécurité</h2>
            <div>
              <label htmlFor="password" className="block text-gray-700">
                Mot de Passe
              </label>
              <input
                id="password"
                type="password"
                placeholder="Mot de Passe"
                className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-gray-700">
                Confirmer le Mot de Passe
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirmer le Mot de Passe"
                className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Two Factor Authentication */}
            <div className="flex items-center mt-4">
              <input
                id="twoFactor"
                type="checkbox"
                className="form-checkbox text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="twoFactor" className="ml-2 text-gray-700">
                Activer l'authentification à deux facteurs
              </label>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sauvegarder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
