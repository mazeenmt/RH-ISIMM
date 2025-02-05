"use client";

import React, { useState, useTransition } from "react";

const initialLeaves = [
  { id: 1, employee: "Ahmed Attigue", type: "Congé annuel", startDate: "2024-05-01", endDate: "2024-05-10" },
  { id: 2, employee: "Karim Sayeb", type: "Congé maladie", startDate: "2024-06-15", endDate: "2024-06-18" },
  { id: 3, employee: "Nour Belhadj", type: "Congé sans solde", startDate: "2024-04-20", endDate: "2024-04-25" },
];

export default function HistoriqueConges() {
  const [leaves, setLeaves] = useState(initialLeaves);
  const [sortKey, setSortKey] = useState("startDate");
  const [isPending, startTransition] = useTransition();

  const sortLeaves = (key) => {
    startTransition(() => {
      const sorted = [...leaves].sort((a, b) =>
        key === "startDate"
          ? new Date(a.startDate) - new Date(b.startDate)
          : a.type.localeCompare(b.type)
      );
      setLeaves(sorted);
      setSortKey(key);
    });
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">Historique des Congés</h1>

        <div className="flex justify-end mb-4">
          <button
            onClick={() => sortLeaves("startDate")}
            className={`px-4 py-2 rounded-md text-white mr-2 cursor-pointer ${
              sortKey === "startDate" ? "bg-blue-600" : "bg-gray-500 hover:bg-blue-600"
            }`}
          >
            Trier par Date
          </button>
          <button
            onClick={() => sortLeaves("type")}
            className={`px-4 py-2 rounded-md text-white ${
              sortKey === "type" ? "bg-blue-600" : "bg-gray-500 hover:bg-blue-600 cursor-pointer"
            }`}
          >
            Trier par Type
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-blue-100 text-blue-600">
                <th className="px-4 py-2 text-left">Employé</th>
                <th className="px-4 py-2 text-left">Type de Congé</th>
                <th className="px-4 py-2 text-left">Date de Début</th>
                <th className="px-4 py-2 text-left">Date de Fin</th>
              </tr>
            </thead>
            <tbody>
              {leaves.map((leave) => (
                <tr key={leave.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{leave.employee}</td>
                  <td className="px-4 py-2">{leave.type}</td>
                  <td className="px-4 py-2">{leave.startDate}</td>
                  <td className="px-4 py-2">{leave.endDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isPending && <p className="text-center text-gray-500 mt-4">Tri en cours...</p>}
      </div>
    </div>
  );
}
