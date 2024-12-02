import Landing from '@import/components/Landing';
import { headers } from 'next/headers';

export default async function Home() {
  const headersList = headers();
  const domain = headersList.get('x-forwarded-host') || '';
  const protocol = headersList.get('x-forwarded-proto') || '';
  const res = await fetch(`${protocol}://${domain}/api/content`);
  const data = await res.json();

  return <Landing data={data}></Landing>;
}
