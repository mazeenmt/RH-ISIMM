import React, { useState } from 'react';

const LeaveRequestForm = () => {
  const [formData, setFormData] = useState({
    leaveType: '',
    startDate: '',
    endDate: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission logic (e.g., send data to backend)
    console.log('Form Submitted:', formData);
    // Reset form
    setFormData({
      leaveType: '',
      startDate: '',
      endDate: '',
      comments: '',
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">Demande de Congé</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Leave Type */}
          <div>
            <label htmlFor="leaveType" className="block text-gray-700">Type de Congé</label>
            <select
              id="leaveType"
              name="leaveType"
              value={formData.leaveType}
              onChange={handleChange}
              className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Sélectionner un type de congé</option>
              <option value="vacation">Vacances</option>
              <option value="sick">Maladie</option>
              <option value="personal">Personnel</option>
            </select>
          </div>

          {/* Start Date */}
          <div>
            <label htmlFor="startDate" className="block text-gray-700">Date de Début</label>
            <input
              id="startDate"
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleChange}
              className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* End Date */}
          <div>
            <label htmlFor="endDate" className="block text-gray-700">Date de Fin</label>
            <input
              id="endDate"
              name="endDate"
              type="date"
              value={formData.endDate}
              onChange={handleChange}
              className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Comments */}
          <div>
            <label htmlFor="comments" className="block text-gray-700">Commentaires</label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Ajoutez des informations supplémentaires"
              className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Soumettre la Demande
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeaveRequestForm;
