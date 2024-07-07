import React from "react";
import {
  FieldError,
  Controller,
  Control,
  FieldValues,
  Path,
} from "react-hook-form";

type InputProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  placeholder: string;
  required?: boolean;
  error: FieldError | undefined;
  control: Control<T>;
};

function Input<T extends FieldValues>({
  name,
  label,
  placeholder,
  required = true,
  error,
  control,
}: InputProps<T>) {
  return (
    <div className="w-full space-y-2">
      <label htmlFor={name} className="font-ubuntu font-light text-brand-one">
        {label} {required ? <span className="text-brand-one">*</span> : null}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="text"
            name={name}
            placeholder={placeholder}
            className="w-full border-b-2 border-brand-two bg-transparent py-2 font-ubuntu font-light text-white caret-brand-one transition-all duration-300 ease-in focus:border-brand-one focus:outline-0"
          />
        )}
      />
    </div>
  );
}

export default Input;
