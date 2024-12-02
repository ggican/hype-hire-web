import classNames from 'classnames';
import type { FC, ReactNode } from 'react';

const Card: FC<{ children?: ReactNode; padding?: string; shadow?: boolean; className?: string }> = ({
  padding = 'p-[16px]',
  children,
  shadow = true,
  className = '',
}) => {
  return (
    <div
      data-testid="card"
      className={classNames('bg-white flex w-full justify-center flex-col  rounded-[12px]', className, padding, {
        'shadow-soft': shadow,
      })}>
      {children}
    </div>
  );
};

export default Card;
