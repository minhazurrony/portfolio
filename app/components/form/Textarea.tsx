import React from "react";
import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

type TextareaProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  placeholder: string;
  required?: boolean;
  error: FieldError | undefined;
  control: Control<T>;
};

function Textarea<T extends FieldValues>({
  name,
  label,
  placeholder,
  required = true,
  error,
  control,
}: TextareaProps<T>) {
  // Determine the type of the field value based on T and Path<T>
  type FieldValueType =
    T extends Record<string, any>
      ? T[Path<T>]
      : T extends Array<any>
        ? T[number]
        : T;
  return (
    <>
      <label className="font-ubuntu font-light text-brand-one">
        {label} {required ? <span className="text-brand-one">*</span> : null}
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue={"" as FieldValueType}
        render={({ field }) => (
          <textarea
            {...field}
            rows={5}
            cols={10}
            placeholder={placeholder}
            className={`w-full border-b-2 border-brand-two bg-transparent py-2 font-ubuntu font-light text-white caret-brand-one transition-all duration-300 ease-in focus:border-brand-one focus:outline-0 ${error && "border-red focus:border-red"}`}
          />
        )}
      />
      {error ? <ErrorMessage message={error.message} /> : null}
    </>
  );
}

export default Textarea;
