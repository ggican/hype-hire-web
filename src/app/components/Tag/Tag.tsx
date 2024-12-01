import classNames from 'classnames';
import type { FC, ReactNode } from 'react';

const Tag: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <span
      className={classNames('px-[4px] py-[12px] font-poppins border rounded-[6px] border-[#C1C5CF] text-[#5E626F]')}>
      {children}
    </span>
  );
};

export default Tag;
