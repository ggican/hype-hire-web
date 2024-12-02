import { IconProps } from '@import/components/Icon/Icon.types';
import { useIconProperties } from '@import/components/Icon/useIconProperties';

const IcKor = ({ size = 'md', color = 'grey-dark', ...props }: IconProps): JSX.Element => {
  const { fill, svgSize } = useIconProperties(size, color);
  return (
    <svg {...props} width={svgSize} height={svgSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.71428 16.0692C1.48363 16.0692 1.30506 16.0059 1.17857 15.8794C1.05952 15.7455 1 15.5632 1 15.3326V8.74777C1 8.50967 1.05952 8.3311 1.17857 8.21205C1.30506 8.08557 1.48363 8.02232 1.71428 8.02232C1.94494 8.02232 2.11979 8.08557 2.23883 8.21205C2.36532 8.3311 2.42857 8.50967 2.42857 8.74777V11.5937H2.45089L5.654 8.37946C5.77305 8.26042 5.89209 8.17113 6.01114 8.11161C6.13019 8.05208 6.26411 8.02232 6.41292 8.02232C6.6287 8.02232 6.78123 8.07812 6.87051 8.18973C6.96724 8.30134 7.00444 8.43155 6.98212 8.58035C6.96724 8.72916 6.89655 8.86681 6.77006 8.9933L3.51115 12.2187L3.52231 11.5714L6.92631 15.0312C7.08256 15.18 7.16441 15.3363 7.17185 15.5C7.17929 15.6637 7.12721 15.8013 7.0156 15.9129C6.91143 16.0171 6.75518 16.0692 6.54685 16.0692C6.36828 16.0692 6.22319 16.032 6.11159 15.9576C6.00742 15.8832 5.88465 15.7753 5.74328 15.6339L2.45089 12.3415H2.42857V15.3326C2.42857 15.5632 2.36904 15.7455 2.24999 15.8794C2.13095 16.0059 1.95238 16.0692 1.71428 16.0692Z"
        fill={fill}
      />
      <path
        d="M11.633 16.0915C10.8741 16.0915 10.2081 15.9241 9.63522 15.5893C9.06974 15.2544 8.63076 14.7857 8.31826 14.183C8.00576 13.5729 7.84951 12.8586 7.84951 12.0402C7.84951 11.4226 7.9388 10.8683 8.11737 10.3772C8.29594 9.87871 8.54891 9.45461 8.87629 9.10491C9.21111 8.74776 9.60917 8.47619 10.0705 8.29018C10.5392 8.09673 11.0601 8 11.633 8C12.3993 8 13.0653 8.16741 13.6307 8.50223C14.1962 8.82961 14.6352 9.29464 14.9477 9.89731C15.2602 10.5 15.4164 11.2106 15.4164 12.029C15.4164 12.6466 15.3272 13.2046 15.1486 13.7031C14.97 14.2016 14.7133 14.6294 14.3785 14.9866C14.0511 15.3437 13.6531 15.619 13.1843 15.8125C12.723 15.9985 12.2059 16.0915 11.633 16.0915ZM11.633 14.8638C12.1166 14.8638 12.5258 14.7522 12.8606 14.529C13.2029 14.3058 13.4633 13.9821 13.6419 13.558C13.8279 13.1339 13.9209 12.628 13.9209 12.0402C13.9209 11.1473 13.72 10.4553 13.3182 9.96428C12.9239 9.47321 12.3621 9.22767 11.633 9.22767C11.1568 9.22767 10.7476 9.33928 10.4053 9.56249C10.063 9.77827 9.79891 10.0982 9.6129 10.5223C9.43432 10.939 9.34504 11.4449 9.34504 12.0402C9.34504 12.9256 9.54593 13.6175 9.94771 14.116C10.3495 14.6146 10.9113 14.8638 11.633 14.8638Z"
        fill={fill}
      />
      <path
        d="M17.5834 16.0692C17.3527 16.0692 17.1741 16.0059 17.0476 15.8794C16.9286 15.7455 16.8691 15.5632 16.8691 15.3326V8.83705C16.8691 8.59896 16.9323 8.42039 17.0588 8.30134C17.1853 8.17485 17.3639 8.11161 17.5945 8.11161H20.2842C21.1473 8.11161 21.8132 8.31994 22.282 8.7366C22.7507 9.14583 22.9851 9.72246 22.9851 10.4665C22.9851 10.9501 22.8772 11.3668 22.6615 11.7165C22.4531 12.0662 22.1481 12.3341 21.7463 12.5201C21.3445 12.7061 20.8571 12.7991 20.2842 12.7991L20.3847 12.6317H20.753C21.058 12.6317 21.3222 12.7061 21.5454 12.8549C21.776 13.0037 21.9769 13.2381 22.1481 13.558L22.9851 15.1093C23.0744 15.2656 23.1153 15.4181 23.1079 15.5669C23.1004 15.7157 23.0446 15.8385 22.9405 15.9352C22.8363 16.0245 22.6838 16.0692 22.4829 16.0692C22.282 16.0692 22.1183 16.0282 21.9918 15.9464C21.8653 15.8571 21.7537 15.7232 21.657 15.5446L20.5298 13.4687C20.3958 13.2158 20.2359 13.0483 20.0499 12.9665C19.8713 12.8772 19.6406 12.8326 19.3579 12.8326H18.2976V15.3326C18.2976 15.5632 18.2381 15.7455 18.1191 15.8794C18 16.0059 17.8214 16.0692 17.5834 16.0692ZM18.2976 11.7723H20.0387C20.5521 11.7723 20.939 11.6681 21.1994 11.4598C21.4673 11.244 21.6012 10.9241 21.6012 10.5C21.6012 10.0833 21.4673 9.77083 21.1994 9.56249C20.939 9.34672 20.5521 9.23883 20.0387 9.23883H18.2976V11.7723Z"
        fill={fill}
      />
    </svg>
  );
};

export default IcKor;
