import * as A from '@components/atoms';

import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);
function Main() {
  return (
    <div className={cx('main-container')}>
      <button>잘사니 메인 페이지입니다.</button>
      <A.Button buttonType={'default'} />
    </div>
  );
}
export default Main;
export const path = '/';
