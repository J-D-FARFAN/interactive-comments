import PropTypes from "prop-types";
import "./button.css";

export function Button({ text }) {
  return (
    <>
      <button type="submit" className="btn">
        {text}
      </button>
    </>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
