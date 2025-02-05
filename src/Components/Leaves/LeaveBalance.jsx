"use client";

import React, { useState, useTransition } from "react";

const initialBalance = {
  annual: 20,
  sick: 10,
  unpaid: 5,
};

const initialRequests = [
  { id: 1, employee: "Ahmed Attigue", type: "Congé annuel", days: 5, status: "En attente" },
  { id: 2, employee: "Karim Sayeb", type: "Congé maladie", days: 2, status: "En attente" },
];

export default function SoldeConges() {
  const [balance, setBalance] = useState(initialBalance);
  const [requests, setRequests] = useState(initialRequests);
  const [isPending, startTransition] = useTransition();

  const approveRequest = (id) => {
    startTransition(() => {
      const updatedRequests = requests.filter((req) => req.id !== id);
      const approvedRequest = requests.find((req) => req.id === id);

      if (approvedRequest) {
        setBalance((prev) => ({
          ...prev,
          [approvedRequest.type === "Congé annuel"
            ? "annual"
            : approvedRequest.type === "Congé maladie"
            ? "sick"
            : "unpaid"]: prev[approvedRequest.type === "Congé annuel"
            ? "annual"
            : approvedRequest.type === "Congé maladie"
            ? "sick"
            : "unpaid"] - approvedRequest.days,
        }));
      }

      setRequests(updatedRequests);
    });
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Solde des Congés
        </h1>

        {/* Solde Restant */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Solde Restant
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-blue-100 rounded-md text-center">
              <p className="text-lg font-medium text-blue-700">Congé Annuel</p>
              <p className="text-2xl font-bold">{balance.annual} jours</p>
            </div>
            <div className="p-4 bg-green-100 rounded-md text-center">
              <p className="text-lg font-medium text-green-700">Congé Maladie</p>
              <p className="text-2xl font-bold">{balance.sick} jours</p>
            </div>
            <div className="p-4 bg-yellow-100 rounded-md text-center">
              <p className="text-lg font-medium text-yellow-700">
                Congé Sans Solde
              </p>
              <p className="text-2xl font-bold">{balance.unpaid} jours</p>
            </div>
          </div>
        </div>

        {/* Demandes en Attente */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Demandes en Attente
          </h2>
          {requests.length === 0 ? (
            <p className="text-gray-600">Aucune demande en attente.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-blue-100 text-blue-600">
                    <th className="px-4 py-2 text-left">Employé</th>
                    <th className="px-4 py-2 text-left">Type de Congé</th>
                    <th className="px-4 py-2 text-left">Jours demandés</th>
                    <th className="px-4 py-2 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((req) => (
                    <tr key={req.id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-2">{req.employee}</td>
                      <td className="px-4 py-2">{req.type}</td>
                      <td className="px-4 py-2">{req.days} jours</td>
                      <td className="px-4 py-2">
                        <button
                          onClick={() => approveRequest(req.id)}
                          className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
                        >
                          Approuver
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {isPending && <p className="text-center text-gray-500 mt-4">Mise à jour...</p>}
      </div>
    </div>
  );
}
