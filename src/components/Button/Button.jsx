import css from '../Button/Button.module.css';

const Button = ({ text, clickHeandler }) => {
  return (
    <button className={css.Button} onClick={clickHeandler} type="button">
      {text}
    </button>
  );
};
export default Button;
