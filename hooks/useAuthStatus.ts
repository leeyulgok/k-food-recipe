import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useAuthStatus = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const token = Array.isArray(router.query.token)
        ? router.query.token[0]
        : router.query.token;

      if (token) {
        localStorage.setItem('jwt', token);

        fetch('http://localhost:3001/auth/google/auth-status', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (!data.isAuthenticated) {
              router.push('/404');
            }
          })
          .catch((error) => {
            console.error('Error fetching auth status:', error);
            router.push('/404');
          });
      } else {
        router.push('/404');
      }
    }
  }, [router]);
};

export default useAuthStatus;
