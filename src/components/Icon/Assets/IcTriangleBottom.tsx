import { IconProps } from '@import/components/Icon/Icon.types';
import { useIconProperties } from '@import/components/Icon/useIconProperties';

const IcTriangleBottom = ({ size = 'md', color = 'grey-dark', ...props }: IconProps): JSX.Element => {
  const { fill, svgSize } = useIconProperties(size, color);
  return (
    <svg {...props} width={svgSize} height={svgSize} viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.43301 10.25C6.24056 10.5833 5.75944 10.5833 5.56699 10.25L0.370835 1.25C0.178386 0.916665 0.418948 0.499999 0.803848 0.499999L11.1962 0.5C11.5811 0.5 11.8216 0.916667 11.6292 1.25L6.43301 10.25Z"
        fill={fill}
      />
    </svg>
  );
};

export default IcTriangleBottom;
