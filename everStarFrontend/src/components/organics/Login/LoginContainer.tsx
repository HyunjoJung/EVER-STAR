import config from 'config';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LogoIcons } from 'components/atoms/symbols/Logo/LogoIcons';
import { KakaoLoginButton } from 'components/atoms/buttons/KakaoLoginButton';
import { OnboardingDescription } from 'components/organics/OnboardingDescription/OnboardingDescription';
import { setToken, setUser } from 'store/slices/authSlice';
import { setPetDetails } from 'store/slices/petSlice';
import { fetchUserInfo } from 'api/authApi';
import { fetchPetDetails } from 'api/petApi';

export const LoginContainer: React.FC = () => {
  const [page, setPage] = useState<'page-1' | 'page-2' | 'page-3' | 'page-4'>('page-1');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOAuthLogin = async () => {
    // 환경 변수로 Mock 로그인 제어
    const useMockLogin = process.env.REACT_APP_USE_MOCK_LOGIN === 'true';

    console.log('[DEBUG] Environment:', process.env.NODE_ENV);
    console.log('[DEBUG] REACT_APP_USE_MOCK_LOGIN:', process.env.REACT_APP_USE_MOCK_LOGIN);
    console.log('[DEBUG] REACT_APP_API_URL:', process.env.REACT_APP_API_URL);
    console.log('[DEBUG] useMockLogin:', useMockLogin);

    if (useMockLogin) {
      try {
        console.log('[DEBUG] LoginContainer IS UPDATED');
        console.log('[DEBUG] Starting mock login...');

        // Mock 토큰 직접 설정 (MSW가 반환하는 토큰)
        const mockToken = 'mock-jwt-token-12345';
        dispatch(setToken(mockToken));
        console.log('[DEBUG] Token set:', mockToken);

        // Mock 사용자 정보 가져오기 (MSW가 응답)
        const userInfo = await fetchUserInfo(mockToken);
        dispatch(setUser(userInfo));
        console.log('[DEBUG] User info loaded:', userInfo);

        // 첫 번째 반려동물 정보 가져오기 (포트폴리오 데모용)
        const petDetails = await fetchPetDetails(1, mockToken);
        dispatch(setPetDetails(petDetails));
        console.log('[DEBUG] Pet details loaded:', petDetails);

        // 지구별 페이지로 이동 (포트폴리오 데모)
        navigate('/earth');
        console.log('[DEBUG] Navigating to /earth');
      } catch (error) {
        console.error('[ERROR] Mock login failed:', error);
        alert('로그인에 실패했습니다. 다시 시도해주세요.');
      }
    } else {
      // 프로덕션에서는 실제 카카오 OAuth
      console.log('[DEBUG] Redirecting to Kakao OAuth...');
      window.location.href = `${config.API_BASE_URL}/oauth2/authorization/kakao`;
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '360px',
        height: '100%',
        gap: '16px',
        position: 'relative',
      }}
    >
      <LogoIcons variant="star" />
      <OnboardingDescription page={page} onChangePage={setPage} />
      <KakaoLoginButton onClick={handleOAuthLogin} />
    </div>
  );
};
