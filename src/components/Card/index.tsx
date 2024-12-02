import dynamic from 'next/dynamic';

const Card = dynamic(() => import('./Card'), {
  ssr: true,
});

export default Card;
