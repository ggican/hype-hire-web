import dynamic from 'next/dynamic';

const Avatar = dynamic(() => import('./Avatar'), {
  ssr: true,
});

export default Avatar;
