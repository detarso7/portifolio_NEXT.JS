const InputField = ({
    id,
    errorMessage,
    placeholder,
    onChange,
    onBlur,
    hasError,
    label,
    isTextArea = false,
  }) => {
    
    const commonProps = {
      id,
      name: id,
      onChange: (e) => onChange(e.target.value),
      onBlur: () => onBlur(true),
    };
  
    return (
      <div className='field'>
        <label htmlFor={id}>{label}</label>
        {!isTextArea && <input {...commonProps} type='text' placeholder={placeholder} />}
        {isTextArea && <textarea {...commonProps} rows='10' placeholder={placeholder}/>}
        {hasError && <span className='error'>{errorMessage}</span>}
      </div>
    );
  };
  
  export default InputField;