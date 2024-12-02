import dynamic from 'next/dynamic';

const CardProfile = dynamic(() => import('./CardProfile'), {
  ssr: true,
});

export default CardProfile;
