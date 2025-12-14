import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MyPage } from 'pages/MyPage';
import { EverstarPage } from 'pages/EverstarPage';
import { TutorialPage } from 'pages/TutorialPage';
import { EarthPage } from 'pages/EarthPage';
import { SplashPageRedirector } from 'pages/SplashPageRedirector';
import { SignUpPage } from 'pages/SignUpPage';
import { LoginPage } from 'pages/LoginPage';
import { OAuthCallback } from 'pages/OAuthCallback';
import { PrivateRoute, PetDetailsRoute } from 'ProtectedRoutes';
import { OpenViduApp } from 'components/templates/OpenViduApp';
import {
  RootLayout,
  AuthLayout,
  MyPageLayout,
  EverstarLayout,
  EarthLayout,
} from 'layouts';
// FCM disabled for frontend-only portfolio (no backend to send notifications)
// import './firebase-messaging-sw';

// React Query 설정
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // Retry failed requests once
      refetchOnWindowFocus: false, // Don't refetch on window focus
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
    mutations: {
      retry: 0, // Don't retry mutations
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* React Query DevTools (development only) */}
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}

      <Router>
        <Routes>
          {/* Root Layout with Suspense */}
          <Route element={<RootLayout />}>
            {/* Public routes without layout */}
            <Route path="/" element={<SplashPageRedirector />} />
            <Route path="/tutorial" element={<TutorialPage />} />
            <Route path="/oauth/*" element={<OAuthCallback />} />
            <Route path="/openvidu/sessionid" element={<OpenViduApp />} />
            <Route path="/openvidu/sessionid/:sessionId" element={<OpenViduApp />} />

            {/* Auth Layout (Login, SignUp) */}
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup/:userEmail" element={<SignUpPage />} />
            </Route>

            {/* MyPage Layout */}
            <Route element={<MyPageLayout />}>
              <Route
                path="/mypage/*"
                element={
                  <PrivateRoute>
                    <MyPage />
                  </PrivateRoute>
                }
              />
            </Route>

            {/* Everstar Layout */}
            <Route element={<EverstarLayout />}>
              <Route
                path="/everstar/:pet/*"
                element={
                  <PrivateRoute>
                    <PetDetailsRoute>
                      <EverstarPage />
                    </PetDetailsRoute>
                  </PrivateRoute>
                }
              />
            </Route>

            {/* Earth Layout */}
            <Route element={<EarthLayout />}>
              <Route path="/earth/*" element={<EarthPage />} />
              <Route
                path="/pets/*"
                element={
                  <PrivateRoute>
                    <PetDetailsRoute>
                      <EarthPage />
                    </PetDetailsRoute>
                  </PrivateRoute>
                }
              />
            </Route>
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
