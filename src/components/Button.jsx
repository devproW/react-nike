import PropTypes from "prop-types";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg rounded-full leading-none ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor}`
          : `bg-coral-red text-white border-coral-red ${fullWidth && "w-full"}`
      }`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  iconURL: PropTypes.string,
};

export default Button;
