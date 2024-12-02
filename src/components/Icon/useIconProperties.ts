// useIconProperties.ts

import { COLORS, ColorsKeys, IconSize, SIZES_ICON } from '@import/components/Icon/Icon.types';
import { useMemo } from 'react';

export const useIconProperties = (size: IconSize = 'md', color: string = 'grey-dark') => {
  const fill = useMemo(() => (color && color in COLORS ? COLORS[color as ColorsKeys] : color), [color]);

  const svgSize = useMemo(() => SIZES_ICON[size], [size]);

  return { fill, svgSize };
};
