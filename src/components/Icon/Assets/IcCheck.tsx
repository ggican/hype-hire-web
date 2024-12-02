import { IconProps } from '@import/components/Icon/Icon.types';
import { useIconProperties } from '@import/components/Icon/useIconProperties';

const IcCheck = ({ size = 'md', color = 'grey-dark', ...props }: IconProps): JSX.Element => {
  const { fill, svgSize } = useIconProperties(size, color);
  return (
    <svg {...props} width={svgSize} height={svgSize} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IcCheck;
