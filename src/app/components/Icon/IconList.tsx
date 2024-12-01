import { IconProps } from '@import/app/components/Icon/Icon.types';
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

// export const NO_OVERRIDE: string[] = [];

// export const iconsList = {
//   logo: dynamic(() => import('./Assets/IcLogo')),
//   dollar: dynamic(() => import('./Assets/IcImage')),
//   'logo-original': dynamic(() => import('./Assets/IcLogoOriginal')),
//   image: dynamic(() => import('./Assets/IcImage')),
//   box: dynamic(() => import('./Assets/IcBox')),
//   call: dynamic(() => import('./Assets/IcCall')),
//   marketing: dynamic(() => import('./Assets/IcMarketing')),
//   default: dynamic(() => import('./Assets/IcLogo')),
//   plus: dynamic(() => import('./Assets/IcPlus')),
//   'caret-right': dynamic(() => import('./Assets/IcCaretRight')),
// };

type IconKeys =
  | 'logo'
  | 'dollar'
  | 'logo-original'
  | 'image'
  | 'box'
  | 'call'
  | 'marketing'
  | 'default'
  | 'plus'
  | 'caret-right';

export const iconsList: Record<IconKeys, ComponentType<IconProps>> = {
  logo: dynamic(() => import('./Assets/IcLogo')),
  dollar: dynamic(() => import('./Assets/IcImage')),
  'logo-original': dynamic(() => import('./Assets/IcLogoOriginal')),
  image: dynamic(() => import('./Assets/IcImage')),
  box: dynamic(() => import('./Assets/IcBox')),
  call: dynamic(() => import('./Assets/IcCall')),
  marketing: dynamic(() => import('./Assets/IcMarketing')),
  default: dynamic(() => import('./Assets/IcLogo')),
  plus: dynamic(() => import('./Assets/IcPlus')),
  'caret-right': dynamic(() => import('./Assets/IcCaretRight')),
};
