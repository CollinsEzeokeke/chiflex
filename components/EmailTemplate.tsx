// components/EmailTemplate.tsx
export const emailTemplate = ({ url }: { url: string }) => `
  <html>
    <body>
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h1>Welcome to Our App!</h1>
        <p>Click the button below to sign in:</p>
        <a href="${url}" style="background-color: #4CAF50; color: white; padding: 14px 20px; text-align: center; text-decoration: none; display: inline-block; border-radius: 4px;">
          Sign In
        </a>
      </div>
    </body>
  </html>
`;