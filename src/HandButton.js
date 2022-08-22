import HandIcon from './HandIcon';
import './HandButton.css'
 

function HandButton({ value, onClick, className }) {
  const handleClick = () => onClick(value);
  const classNames = `HandButton`
  return (
    <button onClick={handleClick} >
      <HandIcon className={classNames} value={value} />
    </button>
  );
}

export default HandButton;
