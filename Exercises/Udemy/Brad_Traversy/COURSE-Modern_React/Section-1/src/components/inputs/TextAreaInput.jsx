export const TextAreaInput = ({
  name,
  label,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className='mb-4'>
      <label htmlFor={name} className='block font-semibold'>
        {label}
      </label>
      <textarea
        type='text'
        name={name}
        className='w-full p-2 border rounded-lg'
        value={value}
        onChange={onChange}></textarea>
    </div>
  );
};
