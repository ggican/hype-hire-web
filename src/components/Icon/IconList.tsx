import { IconProps } from '@import/components/Icon/Icon.types';
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

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
  | 'caret-right'
  | 'caret-down'
  | 'flag-colombia'
  | 'right-square'
  | 'caret-left'
  | 'kor'
  | 'avatar'
  | 'code'
  | 'check'
  | 'gear'
  | 'target'
  | 'triangle-bottom';

export const iconsList: Record<IconKeys, ComponentType<IconProps>> = {
  logo: dynamic(() => import('./Assets/IcLogo')),
  dollar: dynamic(() => import('./Assets/IcDollar')),
  'logo-original': dynamic(() => import('./Assets/IcLogoOriginal')),
  image: dynamic(() => import('./Assets/IcImage')),
  box: dynamic(() => import('./Assets/IcBox')),
  call: dynamic(() => import('./Assets/IcCall')),
  marketing: dynamic(() => import('./Assets/IcMarketing')),
  default: dynamic(() => import('./Assets/IcImage')),
  plus: dynamic(() => import('./Assets/IcPlus')),
  'caret-right': dynamic(() => import('./Assets/IcCaretRight')),
  'flag-colombia': dynamic(() => import('./Assets/IcFlagColombia')),
  'caret-left': dynamic(() => import('./Assets/IcCaretLeft')),
  'caret-down': dynamic(() => import('./Assets/IcCaretDown')),
  'triangle-bottom': dynamic(() => import('./Assets/IcTriangleBottom')),
  'right-square': dynamic(() => import('./Assets/IcRightSquare')),
  kor: dynamic(() => import('./Assets/IcKor')),
  avatar: dynamic(() => import('./Assets/IcAvatar')),
  gear: dynamic(() => import('./Assets/IcGear')),
  code: dynamic(() => import('./Assets/IcCode')),
  check: dynamic(() => import('./Assets/IcCheck')),
  target: dynamic(() => import('./Assets/IcTarget')),
};
