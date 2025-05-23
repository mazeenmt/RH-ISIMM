import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Users() {
    const [usersList, setUsersList] = useState([])
    const navigate = useNavigate();
    const handleModify = ()=> navigate('/users/modify')
    useEffect(()=> {
      async function fetchData(){
        const response = await fetch("http://localhost:8080/users/list")
        const data = await response.json()
        setUsersList(data)
      }
      fetchData()
    }, [])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">Liste des Utilisateurs</h1>

        <div className="flex justify-between mb-6">
          {/* Role Filter */}
          <div className="flex items-center">
            <label htmlFor="role" className="mr-2 text-gray-700">Rôle:</label>
            <select
              id="role"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Tous</option>
              <option value="student">Administrateur</option>
              <option value="admin">Responsable RH</option>
              <option value="teacher">Employé</option>
              <option value="teacher">Enseignant</option>
            </select>
          </div>

          {/* Status Filter */}
          <div className="flex items-center">
            <label htmlFor="status" className="mr-2 text-gray-700">Statut:</label>
            <select
              id="status"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Tous</option>
              <option value="active">Actif</option>
              <option value="inactive">Inactif</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left bg-blue-100 text-blue-600">Nom</th>
                <th className="px-4 py-2 text-left bg-blue-100 text-blue-600">Rôle</th>
                <th className="px-4 py-2 text-left bg-blue-100 text-blue-600">Email</th>
                <th className="px-4 py-2 text-left bg-blue-100 text-blue-600">Statut</th>
                <th className="px-4 py-2 text-left bg-blue-100 text-blue-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {usersList.map((user)=>(
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{user.username}</td>
                  <td className="px-4 py-2">{user.role}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2 text-green-500">Actif</td>
                  <td className="px-4 py-2">
                    <button onClick={handleModify} className="bg-yellow-500 text-white px-3 py-1 mr-2 cursor-pointer rounded-md hover:bg-yellow-600">
                      Modifier
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 cursor-pointer rounded-md hover:bg-red-600">
                      Supprimer
                    </button>
                  </td>
                </tr>
                
              ))
            }
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
