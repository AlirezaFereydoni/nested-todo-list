import classNames from 'classnames';

import { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Styles from './iconBox.module.css';

const Icon = ({ icon, iconColor = '#001743', onClick, className }) => {
  return (
    <button className={classNames(Styles.container, className)} onClick={onClick}>
      <FontAwesomeIcon icon={icon} color={iconColor} />
    </button>
  );
};

export const IconBox = memo(Icon);
