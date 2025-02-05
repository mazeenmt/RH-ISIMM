import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

export default function ReportGenerator() {
  const [selectedDateRange, setSelectedDateRange] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  
  const data = [
    { name: 'Ahmed Attigue', role: 'Responsable RH', email: 'ahmedattigue@gmail.com', status: 'Actif', date: '2025-02-05' },
    { name: 'Karim Sayeb', role: 'Administrateur', email: 'karimsaybe@gmail.com', status: 'Inactif', date: '2025-02-01' },
    { name: 'Sami Khemiri', role: 'Employé', email: 'samikhemiri@gmail.com', status: 'Actif', date: '2025-02-03' },
    { name: 'Rania Maalej', role: 'Enseignant', email: 'raniamaalej@gmail.com', status: 'Inactif', date: '2025-01-29' },
  ];

  // Filter logic
  const handleGenerateReport = () => {
    const doc = new jsPDF();
    const filteredData = data.filter(item => {
      const dateCondition = selectedDateRange ? item.date >= selectedDateRange : true;
      const roleCondition = selectedRole === 'all' || item.role === selectedRole;
      const statusCondition = selectedStatus === 'all' || item.status === selectedStatus;

      return dateCondition && roleCondition && statusCondition;
    });

    // Adding Title to the PDF
    doc.setFontSize(18);
    doc.text('Rapport des Employés et Enseignants', 20, 20);

    // Adding Table to the PDF
    doc.setFontSize(12);
    const startY = 30;
    let rowIndex = startY;

    // Table Headers
    doc.text('Nom', 20, rowIndex);
    doc.text('Rôle', 80, rowIndex);
    doc.text('Email', 150, rowIndex);
    doc.text('Statut', 220, rowIndex);
    doc.text('Date', 290, rowIndex);
    rowIndex += 10;

    // Table Data
    filteredData.forEach(item => {
      doc.text(item.name, 20, rowIndex);
      doc.text(item.role, 80, rowIndex);
      doc.text(item.email, 150, rowIndex);
      doc.text(item.status, 220, rowIndex);
      doc.text(item.date, 290, rowIndex);
      rowIndex += 10;
    });

    // Save the PDF
    doc.save('rapport-employes.pdf');
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-medium text-blue-600 mb-4">Générateur de Rapports</h2>

      <div className="flex justify-between mb-6">
        <div className="flex items-center">
          <label htmlFor="dateRange" className="mr-2 text-gray-700">Plage de Dates:</label>
          <input
            id="dateRange"
            type="date"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedDateRange}
            onChange={e => setSelectedDateRange(e.target.value)}
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="role" className="mr-2 text-gray-700">Rôle:</label>
          <select
            id="role"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedRole}
            onChange={e => setSelectedRole(e.target.value)}
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
            onChange={e => setSelectedStatus(e.target.value)}
          >
            <option value="all">Tous</option>
            <option value="Actif">Actif</option>
            <option value="Inactif">Inactif</option>
          </select>
        </div>
      </div>

      <button
        onClick={handleGenerateReport}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Générer le Rapport
      </button>
    </div>
  );
}
