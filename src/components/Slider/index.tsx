import dynamic from 'next/dynamic';

const Slider = dynamic(() => import('./Slider'), {
  ssr: true,
});

export default Slider;
