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
  className,
}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={classNames(Styles.container, className)} onClick={() => setOpen(prev => !prev)}>
      <div className={Styles.wrapper}>
        <FontAwesomeIcon
          icon={isOpen ? faChevronDown : faChevronRight}
          color='#001743'
          className={Styles['toggle-icon']}
        />

        <Input onChange={onChange} value={value} className={classNames(Styles['input-focus'])} />

        <div className={Styles.icons}>
          <IconBox icon={faAngleDoubleDown} onClick={onLowPriority} />
          <IconBox icon={faAngleDoubleUp} onClick={onHighPriority} />
          <IconBox icon={faTrashAlt} onClick={onDelete} />
          <IconBox icon={faAdd} onClick={onAddSubTask} />
        </div>
      </div>

      <div>{/* Import list and close it */}</div>
    </div>
  );
};
