import { IconProps } from '@import/components/Icon/Icon.types';
import { useIconProperties } from '@import/components/Icon/useIconProperties';

const IcCaretLeft = ({ size = 'md', color = 'grey-dark', ...props }: IconProps): JSX.Element => {
  const { fill, svgSize } = useIconProperties(size, color);
  return (
    <svg {...props} width={svgSize} height={svgSize} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2_8352)">
        <path
          d="M20.0943 26.6665C20.3583 26.6607 20.6105 26.5561 20.801 26.3732C20.9882 26.1857 21.0934 25.9315 21.0934 25.6665C21.0934 25.4015 20.9882 25.1473 20.801 24.9598L12.001 16.1598L20.8143 7.01316C21.0016 6.82566 21.1068 6.57149 21.1068 6.30649C21.1068 6.04149 21.0016 5.78733 20.8143 5.59983C20.6268 5.41256 20.3726 5.30737 20.1076 5.30737C19.8426 5.30737 19.5885 5.41256 19.401 5.59983L9.90763 15.4665C9.81531 15.5582 9.74205 15.6673 9.69205 15.7874C9.64205 15.9075 9.61631 16.0364 9.61631 16.1665C9.61631 16.2966 9.64205 16.4255 9.69205 16.5456C9.74205 16.6657 9.81531 16.7748 9.90763 16.8665L19.3876 26.3865C19.5787 26.5668 19.8316 26.667 20.0943 26.6665Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_2_8352">
          <rect width="32" height="32" fill="white" transform="matrix(-1 0 0 1 32 0)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IcCaretLeft;