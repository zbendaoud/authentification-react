import React from 'react';
import { Formik, Form, useField } from 'formik';
export default function MyTextInput({ label, ...props }) {
  const [field, meta] = useField(props);

  const isError = meta.touched && meta.error;

  return (
    <div className="relative flex flex-col w-full">
      <label htmlFor={props.id || props.name} className="ml-2">
        {label}
      </label>

      <input
        className={`text-input w-full px-4 py-2 border rounded-md focus:outline-none ${
          isError ? 'border-red-400' : 'border-gray-300 focus:border-blue-400'
        }`}
        {...field}
        {...props}
      />
      {isError ? (
        <span className="absolute top-0 right-0 mt-3 text-sm text-red-400 bg-white lg:mr-10 mr-4">
          {meta.error}
        </span>
      ) : null}
    </div>
  );
}
