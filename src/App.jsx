"use client";
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Components/Users/Login'
import Users from './Components/Users/Users'
import ModifyUser from './Components/Users/ModifyUser'
import LeaveRequestForm from './Components/Leaves/LeaveRequestForm';
import LeaveHistory from './Components/Leaves/LeaveHistory';
import LeaveBalance from './Components/Leaves/LeaveBalance';
import EmployeeInformation from './Components/Employees/EmployeeInformation';
import SearchEmployee from './Components/Employees/SearchEmployee';
import ReportGenerator from './Components/Employees/ReportGenerator';


function DevNavigation() {
  const navigate = useNavigate();

  const routes = [
    { path: "/login", label: "Login" },
    { path: "/users", label: "Users" },
    { path: "/users/modify", label: "Modify User" },
    { path: "/leaves/form", label: "Leave Request Form" },
    { path: "/leaves/history", label: "Leave History" },
    { path: "/leaves/balance", label: "Leave Balance" },
    { path: "/employees/information", label: "Employee Information" },
    { path: "/employees/search", label: "Search Employee" },
    { path: "/employees/report", label: "ReportGenerator" },
  ];

  return (
    <div className="fixed top-0 left-0 p-2 w-40 bg-white shadow-lg border rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Dev Navigation</h3>
      <div className="flex flex-col gap-2">
        {routes.map((route) => (
          <button
            key={route.path}
            onClick={() => navigate(route.path)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer"
          >
            {route.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      {<DevNavigation /> /*just wa9t l developpement */}
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/modify" element={<ModifyUser />} />
        <Route path="/leaves/form" element={<LeaveRequestForm />} />
        <Route path="/leaves/history" element={<LeaveHistory />} />
        <Route path="/leaves/balance" element={<LeaveBalance />} />
        <Route path="/employees/information" element={<EmployeeInformation />} />
        <Route path="/employees/search" element={<SearchEmployee />} />
        <Route path="/employees/report" element={<ReportGenerator />} />
      </Routes>
    </Router>
  );
}
