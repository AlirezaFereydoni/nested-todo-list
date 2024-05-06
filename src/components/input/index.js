import classNames from 'classnames';
import Styles from './input.module.css';

export const Input = ({ onChange, value, type = 'text', className }) => {
  return (
    <div className={classNames(Styles.container, className)}>
      <input type={type} onChange={onChange} value={value} />
    </div>
  );
};
