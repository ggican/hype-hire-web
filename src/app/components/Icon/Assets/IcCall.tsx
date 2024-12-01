import { IconProps } from '@import/app/components/Icon/Icon.types';
import { useIconProperties } from '@import/app/components/Icon/useIconProperties';

const IcCall = ({ size = 'md', color = 'grey-dark', ...props }: IconProps): JSX.Element => {
  const { fill, svgSize } = useIconProperties(size, color);
  return (
    <svg {...props} width={svgSize} height={svgSize} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.1689 19.9854C19.9326 19.5898 18.5811 20.2119 18.084 21.3965C18.0547 21.4648 18.0273 21.5342 18.001 21.6035C16.4346 20.9277 15.0098 19.9854 13.7568 18.7949C13.7549 18.7939 13.7539 18.792 13.752 18.791C13.5654 18.6152 13.3848 18.4346 13.209 18.248C13.208 18.2461 13.2061 18.2451 13.2051 18.2432C12.0146 16.9902 11.0723 15.5654 10.3965 13.999C10.4658 13.9727 10.5352 13.9453 10.6045 13.916C11.7891 13.418 12.4092 12.0635 12.0146 10.8301C9.18359 2 9.10938 2 8.19922 2C4.78125 2 2 4.78125 2 8.19922C2 20.2197 11.7803 30 23.8008 30C27.2188 30 30 27.2188 30 23.8008C30 22.8906 30 22.8164 21.1689 19.9854ZM23.8008 28C12.8828 28 4 19.1172 4 8.19922C4 6.08496 5.57129 4.33008 7.60645 4.04199C7.97266 4.96875 8.76758 7.25391 10.1104 11.4404C10.1914 11.6943 10.0684 11.9717 9.83008 12.0723C9.53027 12.1973 9.21777 12.2881 8.89941 12.3408C8.6084 12.3887 8.35352 12.5625 8.20312 12.8164C8.05176 13.0693 8.02148 13.377 8.11816 13.6553C8.89453 15.8906 10.1182 17.8975 11.7549 19.6201C11.957 19.835 12.165 20.043 12.3799 20.2451C14.1025 21.8818 16.1094 23.1055 18.3447 23.8818C18.623 23.9795 18.9307 23.9473 19.1836 23.7969C19.4375 23.6465 19.6113 23.3916 19.6592 23.1006C19.7119 22.7822 19.8027 22.4697 19.9277 22.1709C20.0283 21.9316 20.3047 21.8105 20.5586 21.8896C24.7451 23.2324 27.0312 24.0273 27.958 24.3936C27.6699 26.4287 25.915 28 23.8008 28Z"
        fill={fill}
      />
      <path
        d="M17.7354 7C21.7412 7 25 10.2588 25 14.2646C25 14.8174 25.4473 15.2646 26 15.2646C26.5527 15.2646 27 14.8174 27 14.2646C27 9.15625 22.8438 5 17.7354 5C17.1826 5 16.7354 5.44727 16.7354 6C16.7354 6.55273 17.1826 7 17.7354 7Z"
        fill={fill}
      />
      <path
        d="M16 11.4902C18.4863 11.4902 20.5098 13.5137 20.5098 16C20.5098 16.5527 20.957 17 21.5098 17C22.0625 17 22.5098 16.5527 22.5098 16C22.5098 12.4102 19.5898 9.49023 16 9.49023C15.4473 9.49023 15 9.9375 15 10.4902C15 11.043 15.4473 11.4902 16 11.4902Z"
        fill={fill}
      />
    </svg>
  );
};

export default IcCall;
