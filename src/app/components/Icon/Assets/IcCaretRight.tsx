import { IconProps } from '@import/app/components/Icon/Icon.types';
import { useIconProperties } from '@import/app/components/Icon/useIconProperties';

const IcCaretRight = ({ size = 'md', color = 'grey-dark', ...props }: IconProps): JSX.Element => {
  const { fill, svgSize } = useIconProperties(size, color);
  return (
    <svg {...props} width={svgSize} height={svgSize} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2_8351)">
        <path
          d="M11.9057 26.6665C11.6417 26.6607 11.3895 26.5561 11.199 26.3732C11.0117 26.1857 10.9066 25.9315 10.9066 25.6665C10.9066 25.4015 11.0117 25.1473 11.199 24.9598L19.999 16.1598L11.1857 7.01316C10.9984 6.82566 10.8932 6.57149 10.8932 6.30649C10.8932 6.04149 10.9984 5.78733 11.1857 5.59983C11.3732 5.41256 11.6273 5.30737 11.8924 5.30737C12.1574 5.30737 12.4115 5.41256 12.599 5.59983L22.0923 15.4665C22.1847 15.5582 22.2579 15.6673 22.3079 15.7874C22.3579 15.9075 22.3837 16.0364 22.3837 16.1665C22.3837 16.2966 22.3579 16.4255 22.3079 16.5456C22.2579 16.6657 22.1847 16.7748 22.0923 16.8665L12.6124 26.3865C12.4213 26.5668 12.1684 26.667 11.9057 26.6665Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_2_8351">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IcCaretRight;
