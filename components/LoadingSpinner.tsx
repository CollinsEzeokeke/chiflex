// components/LoadingSpinner.tsx
import Image from "next/image";

interface LoadingSpinnerProps {
    message: string;  // The loading message to display
  }
  
  export default function LoadingSpinner({ message }: LoadingSpinnerProps) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center animate-slideIn">
          <Image
            src="/loading.gif"
            alt="Loading..."
            className="w-16 h-16"
          />
          <div className="mt-4 text-gray-700 text-sm flex items-center">
            <span>{message}</span>
            <span className="animate-ellipsis">...</span>
          </div>
        </div>
      </div>
    );
  }