import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('./Footer'), {
  ssr: true,
});

export default Footer;
