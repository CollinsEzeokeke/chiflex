// lib/auth.ts
import { useState, useEffect } from 'react';

interface User {
  username: string;
  password: string;
}

const validUser: User = {
  username: 'user',
  password: 'password123'
};

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (username: string, password: string) => {
    if (username === validUser.username && password === validUser.password) {
      const newUser = { username, password };
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return { user, login, logout };
};