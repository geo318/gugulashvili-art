import React from 'react';
import { useFormContext } from 'react-hook-form';

export const Input: React.FC<{
  name: string;
  type?: string;
  placeholder?: string;
  label?: string;
  noLabel?: boolean;
}> = ({ name, type, placeholder, label, noLabel }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className='w-full'>
      <label htmlFor={name} className='text-sm font-bold'>
        {!noLabel && (label || placeholder)}
      </label>
      <input
        className={`w-full border border-slate-700 rounded-md py-2 px-5 text-sm ${
          type === 'file' && '!p-1'
        }`}
        type={type || 'text'}
        {...register(name)}
        placeholder={placeholder}
        id={name}
      />
      <div className='text-red-600 text-xs mb-3 pl-2'>
        {name in errors && <span>{`${errors?.[name]?.message}`}</span>}
      </div>
    </div>
  );
};
