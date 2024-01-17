import React from 'react';

const Select = ({ label, options, value, onChange }) => {
  return (
    <div >
      <select value={value} onChange={onChange} className='h-10 p-1 border outline-none bg-inherit'>
        {options.map((option, index) => (
          <option key={index} value={option.value} className='border bg-inherit'>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
