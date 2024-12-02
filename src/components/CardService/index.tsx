import dynamic from 'next/dynamic';

const CardService = dynamic(() => import('./CardService'), {
  ssr: true,
});

export default CardService;
