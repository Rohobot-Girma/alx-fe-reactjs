import { useState } from "react";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulate login functionality
  const login = () => setIsAuthenticated(true);

  // Simulate logout functionality
  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, login, logout };
}
