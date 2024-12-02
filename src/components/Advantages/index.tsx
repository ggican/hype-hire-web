import dynamic from 'next/dynamic';

const Advantages = dynamic(() => import('./Advantages'), {
  ssr: true,
});

export default Advantages;
