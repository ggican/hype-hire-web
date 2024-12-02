import classNames from 'classnames';
import type { FC, ReactNode } from 'react';

const Tag: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <span
      className={classNames(
        'leading-[24px] font-extrabold lg:text-[16px] text-[14px] px-[12px] text-center py-[4px] border rounded-[6px] border-[#C1C5CF] text-[#5E626F] md:text-[14px] sm:text-[14px] xs:text-[14px] md:leading-[21px]',
      )}>
      {children}
    </span>
  );
};

export default Tag;
