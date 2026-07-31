import React from "react";

type ErrorMessageProps = {
  message: string | undefined;
};

function ErrorMessage({ message }: ErrorMessageProps) {
  return <p className="font-ubuntu text-sm text-red">{message}</p>;
}

export default ErrorMessage;
