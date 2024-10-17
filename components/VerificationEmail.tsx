// components/VerificationEmail.tsx

import React from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Tailwind,
  Img,
} from "@react-email/components";

interface VerificationEmailProps {
  verificationUrl: string;
}

const chiflexImage = "../public/images/chiflex.png";

export const VerificationEmail: React.FC<VerificationEmailProps> = ({
  verificationUrl,
}) => {
  return (
    <Html>
      <Tailwind>
        <Body className="bg-gray-100">
          <Container className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-md">
            <Img
              src={chiflexImage}
              alt="Chiflex Logo"
              width="100"
              height="50"
              className="mb-4"
            />
            <Text className="text-2xl font-bold text-gray-800 mb-4">
              Verify your email
            </Text>
            <Text className="text-gray-600 mb-6">
              Thank you for signing up. Please click the button below to verify
              your email address.
            </Text>
            <Link
              href={verificationUrl}
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
            >
              Verify Email
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
