import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      // router.go(-1);
      router.push('/');
    }, 3000);
  });

  return (
    <div className='not-found'>
      <h1>Oooops...</h1>
      <h2>Pas de citron en limonade ici</h2>
      <p>
        {' '}
        Retour en zone{' '}
        <Link href='/'>
          <a>Citronnée</a>
        </Link>{' '}
      </p>
    </div>
  );
};

export default NotFound;
