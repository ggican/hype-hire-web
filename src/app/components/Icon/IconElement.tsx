import classNames from 'classnames';
import React, { Suspense } from 'react';

import { SIZES_ICON, type IconProps } from './Icon.types';
import { iconsList } from './IconList';

const IconElement = ({
  name = 'default',
  size = 'md',
  className,
  style,
  rotate,
  color = 'grey',
  ...rest
}: IconProps) => {
  const SvgIcon: React.ComponentType<IconProps> | undefined = iconsList[name];
  const svgSize = SIZES_ICON[size];

  if (!SvgIcon) return null;

  return (
    <Suspense fallback={null}>
      <span
        className={classNames(className)}
        style={{ ...style, fontSize: svgSize, transform: `rotate(${rotate || 0}deg)`, color }}
        {...rest}>
        <SvgIcon className={className} size={size} color={color} />
      </span>
    </Suspense>
  );
};

export default IconElement;
