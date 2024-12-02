import dynamic from 'next/dynamic';

const Landing = dynamic(() => import('./Landing'), {
  ssr: true,
});

export default Landing;
