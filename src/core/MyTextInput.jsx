import React from 'react';
import { Formik, Form, useField } from 'formik';

export default function MyTextInput({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col w-full">
      <label htmlFor={props.id || props.name} className="ml-2">
        {label}
      </label>

      <input
        className=" text-input w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
        {...field}
        {...props}
      />

      {meta.touched && meta.error ? (
        <div className="error bg-red-500 w-max px-4">{meta.error}</div>
      ) : null}
    </div>
  );
}

{
  /* <input type="text" value="tbone" disabled class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
invalid:border-pink-500 invalid:text-pink-600
focus:invalid:border-pink-500 focus:invalid:ring-pink-500
"/> */
}
//button pending
{
  /* <button type="button" class="bg-indigo-500 ..." disabled>
  <svg class="motion-reduce:hidden animate-spin ..." viewBox="0 0 24 24"><!-- ... --></svg>
  Processing...
</button> */
}

{
  /* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform hover:scale-105"></button>; */
}
