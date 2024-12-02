import dynamic from 'next/dynamic';

const CheckBox = dynamic(() => import('./CheckBox'), {
  ssr: true,
});

export default CheckBox;
