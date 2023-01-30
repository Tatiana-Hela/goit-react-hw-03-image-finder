import PropTypes from 'prop-types';
import css from '../Button/Button.module.css';

const Button = ({ text, clickHeandler }) => {
  return (
    <button className={css.Button} onClick={clickHeandler} type="button">
      {text}
    </button>
  );
};
export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickHeandler: PropTypes.func.isRequired,
};
