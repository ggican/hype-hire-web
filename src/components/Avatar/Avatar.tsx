import classNames from 'classnames';
import Image from 'next/image';
import type { FC, ReactNode } from 'react';

// Defining the types for the props
interface TagProps {
  rounded?: boolean;
  className?: string;
  src: string; // Image source (required)
  width: number; // Image width (required)
  height: number; // Image height (required)
  alt?: string; // Alt text for the image (optional)
  children?: ReactNode; // Any children that will be rendered next to the image
}

const Avatar: FC<TagProps> = ({ className, src, width, alt = 'avatar', height, children, rounded = true }) => {
  return (
    <div className={classNames('inline-flex items-center', className)}>
      <Image
        src={src}
        width={width}
        alt={alt}
        height={height}
        className={classNames({
          'rounded-full': rounded,
        })}
      />
      {children && children}
    </div>
  );
};

export default Avatar;
