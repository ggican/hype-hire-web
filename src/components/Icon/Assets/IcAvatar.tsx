import { IconProps } from '@import/components/Icon/Icon.types';
import { useIconProperties } from '@import/components/Icon/useIconProperties';

const IcAvatar = ({ size = 'md', color = 'grey-dark', ...props }: IconProps): JSX.Element => {
  const { fill, svgSize } = useIconProperties(size, color);
  return (
    <svg {...props} width={svgSize} height={svgSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.9142 12.0336C13.0384 12.0336 13.9751 11.6609 14.8182 10.9154C15.7549 10.1697 16.2233 8.95812 16.2233 7.74654C16.2233 6.81455 15.9423 5.88257 15.3803 5.23018C14.6308 4.1118 13.413 3.36621 11.9142 3.36621C9.57231 3.36621 7.6051 5.32338 7.6051 7.65334C7.6051 10.0765 9.57231 12.0336 11.9142 12.0336Z"
        fill={fill}
      />
      <path
        d="M14.3965 14.2705C14.1155 14.2705 13.9281 14.1772 13.6471 14.1772H10.0874C7.37079 14.1772 5.12256 16.4141 5.12256 19.1168C5.12256 19.7692 5.40359 20.2352 5.87197 20.608C6.62138 21.074 8.40123 21.6331 11.8673 21.6331C15.3333 21.6331 17.0194 21.074 17.8625 20.608C17.8625 20.608 17.9562 20.5149 18.0499 20.5149C18.4246 20.2352 18.7056 19.7692 18.7056 19.1168C18.6119 16.6937 16.8321 14.6433 14.3965 14.2705Z"
        fill={fill}
      />
    </svg>
  );
};

export default IcAvatar;