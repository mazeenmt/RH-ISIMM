import React from 'react'
import {useNavigate} from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-gray-100">
  <div className="flex flex-col justify-center bg-white py-8 px-50 rounded-lg shadow-lg w-full max-w-3xl h-120">
    <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">Administration ISIMM</h1>

    <form className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Nom de l'utilisateur"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div>
        <input
          type="password"
          placeholder="Mot de Passe"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded-lg cursor-pointer shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Se connecter
      </button>
    </form>

    <div className="mt-6 text-center text-sm">
      <p>
        Vous n'avez pas de compte?{" "}
        <a onClick={() => navigate('/signup')} className="text-blue-500 hover:underline cursor-pointer">
          S'inscrire
        </a>
      </p>
      <p className="mt-2">
        <a href="#" className="text-blue-500 hover:underline">
          Mot de passe oublié
        </a>
      </p>
    </div>
  </div>
</div>

  )
}
