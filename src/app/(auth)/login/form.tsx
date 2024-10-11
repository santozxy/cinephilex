"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  createRequestToken,
  validateWithLogin,
  createSession,
} from "@/actions/auth-manager";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Passo 1: Obter token de solicitação inicial
      const initialRequestToken = await createRequestToken();

      // Passo 2: Validar credenciais e obter novo token de solicitação
      const validatedRequestToken = await validateWithLogin(
        username,
        password,
        initialRequestToken
      );

      if (!validatedRequestToken) {
        setError("Credenciais inválidas. Por favor, tente novamente.");
        setIsLoading(false);
        return;
      }

      // Passo 3: Criar sessão com o token validado
      const sessionCreated = await createSession(validatedRequestToken);

      if (sessionCreated) {
        router.push("/home");
      } else {
        setError("Erro ao criar sessão. Por favor, tente novamente.");
      }
    } catch (error) {
      console.error("Erro no login:", error);
      setError("Ocorreu um erro durante o login. Por favor, tente novamente.");
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700"
        >
          Nome de usuário
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Senha
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50"
      >
        {isLoading ? "Carregando..." : "Login"}
      </button>
    </form>
  );
}
