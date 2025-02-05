import React, { useState } from 'react';

export default function SearchTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const data = [
    { name: 'Ahmed Attigue', role: 'Responsable RH', email: 'ahmedattigue@gmail.com', status: 'Actif' },
    { name: 'Karim Sayeb', role: 'Administrateur', email: 'karimsaybe@gmail.com', status: 'Inactif' },
    { name: 'Sami Khemiri', role: 'Employé', email: 'samikhemiri@gmail.com', status: 'Actif' },
    { name: 'Rania Maalej', role: 'Enseignant', email: 'raniamaalej@gmail.com', status: 'Inactif' },
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const filteredData = data.filter(item => {
    return (
      (selectedRole === 'all' || item.role === selectedRole) &&
      (selectedStatus === 'all' || item.status === selectedStatus) &&
      (item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.email.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="p-6">
      <h2 className="text-xl font-medium text-blue-600 mb-4">Tableau de Recherche</h2>

      <div className="flex justify-between mb-6">
        <div className="flex items-center">
          <label htmlFor="search" className="mr-2 text-gray-700">Recherche:</label>
          <input
            id="search"
            type="text"
            placeholder="Nom ou Email"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="role" className="mr-2 text-gray-700">Rôle:</label>
          <select
            id="role"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedRole}
            onChange={handleRoleChange}
          >
            <option value="all">Tous</option>
            <option value="Responsable RH">Responsable RH</option>
            <option value="Administrateur">Administrateur</option>
            <option value="Employé">Employé</option>
            <option value="Enseignant">Enseignant</option>
          </select>
        </div>

        <div className="flex items-center">
          <label htmlFor="status" className="mr-2 text-gray-700">Statut:</label>
          <select
            id="status"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedStatus}
            onChange={handleStatusChange}
          >
            <option value="all">Tous</option>
            <option value="Actif">Actif</option>
            <option value="Inactif">Inactif</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left bg-blue-100 text-blue-600">Nom</th>
              <th className="px-4 py-2 text-left bg-blue-100 text-blue-600">Rôle</th>
              <th className="px-4 py-2 text-left bg-blue-100 text-blue-600">Email</th>
              <th className="px-4 py-2 text-left bg-blue-100 text-blue-600">Statut</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center px-4 py-2 text-gray-500">Aucun résultat trouvé</td>
              </tr>
            ) : (
              filteredData.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.role}</td>
                  <td className="px-4 py-2">{item.email}</td>
                  <td className="px-4 py-2">{item.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
