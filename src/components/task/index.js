import Styles from './task.module.css';
import classNames from 'classnames';

import { useState } from 'react';
import { IconBox } from '../iconBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronDown,
  faTrashAlt,
  faAdd,
  faAngleDoubleDown,
  faAngleDoubleUp,
} from '@fortawesome/free-solid-svg-icons';
import { Input } from '../input';

export const Task = ({
  onDelete,
  onHighPriority,
  onLowPriority,
  onChange,
  value,
  onAddSubTask,
  children,
  className,
}) => {
  const [isOpen, setOpen] = useState(false);

  const onAddSubTaskHandler = () => {
    onAddSubTask();
    setOpen(true);
  };

  return (
    <div className={classNames(Styles.container, className)}>
      <div className={Styles.wrapper}>
        <FontAwesomeIcon
          icon={isOpen ? faChevronDown : faChevronRight}
          className={Styles['toggle-icon']}
          onClick={() => setOpen(prev => !prev)}
        />

        <Input onChange={onChange} value={value} className={classNames(Styles['input-focus'])} />

        <div className={Styles.icons}>
          <IconBox icon={faAngleDoubleDown} onClick={onLowPriority} />
          <IconBox icon={faAngleDoubleUp} onClick={onHighPriority} />
          <IconBox icon={faTrashAlt} onClick={onDelete} />
          <IconBox icon={faAdd} onClick={onAddSubTaskHandler} />
        </div>
      </div>

      <div
        className={classNames(Styles['subtask'], {
          [Styles['subtask__open']]: isOpen,
          [Styles['subtask__close']]: !isOpen,
        })}
      >
        {isOpen && children}
      </div>
    </div>
  );
};
