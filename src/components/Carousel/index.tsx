import dynamic from 'next/dynamic';

const Carousel = dynamic(() => import('./Carousel'), {
  ssr: true,
});

export default Carousel;
