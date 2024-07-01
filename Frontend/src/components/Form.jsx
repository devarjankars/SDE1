import React from 'react';

const Form = ({ fields, onChange, onSubmit, values }) => (
  <form onSubmit={onSubmit} className="space-y-4">
    {fields.map(field => (
      <div key={field.name} className="space-y-1">
        <label className="block text-sm font-medium text-gray-900 ">{field.label}</label>
        <input
          type={field.type}
          name={field.name}
          value={values[field.name]}
          onChange={onChange}
          className="form-input mt-1 block w-full bg-slate-100 border-solid-black"
        />
      </div>
    ))}
    <button type="submit" className="bg-blue-900 text-white px-4 py-2">Submit</button>
  </form>
);

export default Form;
