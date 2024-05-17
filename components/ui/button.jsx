const Button = ({ children, type = 'button', onClick, variant = 'primary' }) => {
    const baseClasses = 'px-4 py-2 rounded-md text-white focus:outline-none';
    const variantClasses =
      variant === 'outline'
        ? 'border border-indigo-500 text-indigo-500'
        : 'bg-indigo-500 hover:bg-indigo-600';
  
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${baseClasses} ${variantClasses}`}
      >
        {children}
      </button>
    );
  };
  
  export { Button };
  