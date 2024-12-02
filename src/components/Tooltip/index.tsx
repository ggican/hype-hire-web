import dynamic from 'next/dynamic';

const Tooltip = dynamic(() => import('./Tooltip'), {
  ssr: true,
});

export default Tooltip;
