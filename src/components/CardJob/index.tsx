import dynamic from 'next/dynamic';

const CardJob = dynamic(() => import('./CardJob'), {
  ssr: true,
});

export default CardJob;
