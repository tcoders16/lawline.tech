// src/components/ToastNotification.tsx
import { useEffect, useState } from "react";
import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";

interface ToastNotificationProps {
  message: string;
  type?: "success" | "error";
  duration?: number;
}

const ToastNotification: React.FC<ToastNotificationProps> = ({
  message,
  type = "success",
  duration = 2000,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timeout);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in-out">
      <div
        className={`flex items-center px-4 py-3 rounded-lg shadow-lg text-white w-fit max-w-sm text-sm ${
          type === "success" ? "bg-emerald-600" : "bg-red-500"
        }`}
      >
        {type === "success" ? (
          <CheckCircleIcon className="w-5 h-5 mr-2" />
        ) : (
          <ExclamationCircleIcon className="w-5 h-5 mr-2" />
        )}
        {message}
      </div>
    </div>
  );
};

export default ToastNotification;