import { useField } from 'formik';
import React from 'react';

export default function MySelect({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>

      <select
        {...field}
        {...props}
        className=" text-input w-full px-6 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
      />

      {meta.touched && meta.error ? (
        <div className="error bg-red-500 w-max px-4">{meta.error}</div>
      ) : null}
    </>
  );
}
