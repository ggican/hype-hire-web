import classNames from 'classnames';
import React, { FC } from 'react';

type TooltipProps = {
  children: React.ReactNode;
  tooltip: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'top-center'; // Position of the tooltip
  noHover?: boolean;
  className?: string;
  arrowPlacement?:
    | 'left'
    | 'right'
    | 'center'
    | 'top-left'
    | 'top-right'
    | 'top-center'
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom-center'; // Placement of the arrow
};

const Tooltip: FC<TooltipProps> = ({
  children,
  tooltip,
  placement = 'top',
  arrowPlacement = 'center',
  className = '',
  noHover = false,
}) => {
  // Define the styles for the tooltip based on the placement prop
  const tooltipStyles = {
    top: 'bottom-full lg:top-[-80px] top-[-50px] mb-2',
    bottom: 'top-full mt-2',
    left: 'right-full mr-2',
    right: 'left-full ml-2',
    'top-center': 'left-1/2 lg:top-[-80px] top-[-50px] transform -translate-x-1/2',
  };

  // Arrow positioning based on the `arrowPlacement` prop
  const arrowPlacementStyles = {
    'top-left': 'left-10px top-[-14px]',
    'top-right': 'right-10px top-[-14px]',
    'top-center': 'left-1/2 top-[-14px] -translate-x-1/2',
    'bottom-left': 'left-10px bottom-[-12px] [&>div]:rotate-180',
    'bottom-right': 'right-10px bottom-[14px]',
    'bottom-center': 'left-1/2 bottom-[-12px] [&>div]:rotate-180 -translate-x-1/2',
    left: 'top-1/2 left-[14px] transform -translate-y-1/2',
    right: 'top-1/2 right-[14px] transform -translate-y-1/2',
    center: 'left-1/2 transform -translate-x-1/2',
  };

  return (
    <div data-testid="tooltip-test-id" className="relative flex w-full items-center group">
      {/* Target Element */}
      <span className='w-full flex'>{children}</span>

      {/* Tooltip */}
      <div
        className={classNames(
          `absolute ${tooltipStyles[placement]} min-w-[50px] group-hover:block  group-hover:opacity-100 transition-opacity duration-200`,
          { 'opacity-0 hidden': !noHover },
        )}>
        <div
          className={classNames(
            'inline-flex bg-white text-black text-xs py-[8px] px-[12px] rounded-[8px] relative',
            className,
          )}>
          {/* Tooltip Text */}
          {tooltip}

          {/* Arrow */}

          <div />
          <div className={`absolute ${arrowPlacementStyles[arrowPlacement]}`}>
            <div className={classNames('w-[14px] h-[14px] bg-white custom-clip-path', className)}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
