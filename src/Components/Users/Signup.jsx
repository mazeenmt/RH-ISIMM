import React, { useState } from 'react';
import UserInfo from './UserInfo';
import axios from "axios";
import {Eye, EyeOff} from "lucide-react"

export default function Signup() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    idCard: 0,
    phone: 0,
    address: "",
    birthdate: null,
    role: "ADMIN",
    email: "",
    username: "",
    password: "",
  })
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [validatedPassword, setValidatedPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(null); // null, true, or false
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[@$!%*?&]/.test(password);
    const minLength = password.length >= 8;

    if (!minLength || !hasUpperCase || !hasLowerCase || !hasDigit || !hasSpecialChar) {
      setValidatedPassword(false)
      return { isValid: false, message: "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un symbole." };
    }
    
    setValidatedPassword(true)
    return { isValid: true, message: "Mot de passe sécurisé ✅" };
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const validation = validatePassword(newPassword);
    setPasswordStrength(validation.message);

    if (confirmPassword) {
      setPasswordsMatch(newPassword === confirmPassword);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    if (newConfirmPassword) {
      setPasswordsMatch(password === newConfirmPassword);
      if(passwordsMatch){
        setUserData((prevData) => ({
          ...prevData,
          password: password,
      }));
      }
    } else {
      setPasswordsMatch(null);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
  };

  const postData = (event) => {
    if (validatedPassword && passwordsMatch){
    axios.post("http://localhost:8080/users/create", JSON.stringify(userData), 
      {headers: { "content-type": "application/json"}}
    )
            .then(response => {
                console.log("Waiting for email confirmation...")
                console.log(response)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }else alert("Mot de passe non valide.")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Créer un compte utilisateur
        </h1>
        <div className="space-y-6">
          <UserInfo userData={userData} setUserData={setUserData}/>

          <div className="bg-gray-50 p-4 rounded-md shadow-sm">
            <h2 className="text-xl font-medium text-blue-600 mb-4">Rôle de l'Utilisateur</h2>
            <div className="flex items-center">
              <label htmlFor="role" className="mr-4 text-gray-700">
                Vous êtes:
              </label>
              <select
                id="role"
                name="role"
                onChange={handleChange}
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="ADMIN">Administrateur</option>
                <option value="RESPONSIBLE">Responsable RH</option>
                <option value="TEACHER">Enseignant</option>
                <option value="EMPLOYEE">Employé</option>
              </select>
            </div>
          </div>

          {/* Security Settings Section */}
          <div className="bg-gray-50 p-4 rounded-md shadow-sm">
            <h2 className="text-xl font-medium text-blue-600 mb-4">Paramètres de Sécurité</h2>
            <div>
              <label htmlFor="username" className="block text-gray-700">
                Nom d'utilisateur
              </label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Nom d'utilisateur"
                onChange={handleChange}
                className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700">
                Mot de Passe
              </label>
              <div className="relative flex items-center">
                <input
                  id="password"
                  name="password"
                  type={showPassword? "text": "password"}
                  placeholder="Mot de Passe"
                  value={password}
                  onChange={handlePasswordChange}
                  className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-gray-600 cursor-pointer top-5"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <p className={`mt-1 text-sm ${passwordStrength.includes("sécurisé") ? "text-green-600" : "text-red-600"}`}>
                {passwordStrength}
              </p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-gray-700">
                Confirmer le Mot de Passe
              </label>
              <div className="relative flex items-center">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword? "text": "password"}
                  placeholder="Confirmer le Mot de Passe"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 text-gray-600 cursor-pointer top-5"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <p className={`mt-1 text-sm ${passwordsMatch ? "text-green-600" : "text-yellow-600"}`}>
                {confirmPassword? passwordsMatch ? "Les mots de passe correspondent ✅" : "Les mots de passe ne correspondent pas ❌" : ""}
              </p>
            </div>
         </div>

          <div className="flex justify-center">
            <button
              onClick={postData}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              Sauvegarder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
