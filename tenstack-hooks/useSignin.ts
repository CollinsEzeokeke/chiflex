// hooks/useAuth.ts
import { useMutation } from '@tanstack/react-query';

interface SignInCredentials {
  email: string;
  password: string;
}

export const useCredentialSignIn = () => {
  return useMutation({
    mutationKey: ['signInCredentials'],
    mutationFn: async (credentials: SignInCredentials) => {
      const response = await fetch('/api/credential-signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      if (!response.ok) {
        throw new Error('Failed to sign in');
      }
      return response.json();
    },
  });
};

export const useGoogleSignIn = () => {
  return useMutation({
    mutationKey: ['signInGoogle'],
    mutationFn: async () => {
      const response = await fetch('/api/google-signin', {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Failed to initiate Google sign-in');
      }
      return response.json();
    },
  });
};