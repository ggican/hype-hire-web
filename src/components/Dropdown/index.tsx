import dynamic from 'next/dynamic';

const Dropdown = dynamic(() => import('./Dropdown'), {
  ssr: true,
});

export default Dropdown;
