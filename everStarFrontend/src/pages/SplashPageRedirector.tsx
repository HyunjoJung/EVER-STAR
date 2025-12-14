import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SplashTemplate } from 'components/templates/SplashTemplate'; // 올바른 경로로 변경하세요
import bgImage from 'assets/images/bg-login.webp';

export const SplashPageRedirector = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login'); // 1.5초 후에 로그인 페이지로 이동
    }, 1500); // 1.5초 동안 스플래시 페이지 표시

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // navigate는 stable하므로 dependency에서 제외

  return (
    <div className='relative flex items-center justify-center min-h-screen'>
      {/* Background Image */}
      <img
        src={bgImage}
        alt='Background'
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        className='absolute top-0 left-0 w-full h-full object-cover'
      />
      {/* Splash Template */}
      <SplashTemplate type='splash' className='z-10' />
    </div>
  );
};
