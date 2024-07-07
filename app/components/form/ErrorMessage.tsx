import React from "react";

type ErrorMessageProps = {
  message: string | undefined;
};

function ErrorMessage({ message }: ErrorMessageProps) {
  return <p className="text-red font-ubuntu text-sm">{message}</p>;
}

export default ErrorMessage;
