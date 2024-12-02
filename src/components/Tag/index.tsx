import dynamic from 'next/dynamic';

const Tag = dynamic(() => import('./Tag'), {
  ssr: true,
});

export default Tag;
