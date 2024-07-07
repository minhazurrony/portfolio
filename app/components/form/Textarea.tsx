import React from "react";
import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";

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
  return (
    <>
      <label htmlFor={name} className="font-ubuntu font-light text-brand-one">
        {label} {required ? <span className="text-brand-one">*</span> : null}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <textarea
            {...field}
            rows={2}
            cols={16}
            name={name}
            placeholder={placeholder}
            className="w-full border-b-2 border-brand-two bg-transparent py-2 font-ubuntu font-light text-white caret-brand-one transition-all duration-300 ease-in focus:border-brand-one focus:outline-0"
          />
        )}
      />
    </>
  );
}

export default Textarea;
