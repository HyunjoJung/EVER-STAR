import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, Messaging } from 'firebase/messaging';
import { fetchAlramPost } from 'api/alramApi'; // 직접 API 호출 함수 가져오기
import { Store } from 'store/Store'; // Redux 스토어를 직접 가져옴

export const firebaseConfig = {
  apiKey: 'AIzaSyCK8xtwPUso_WTxQpBS4GLfC4NLGIKL92U',
  authDomain: 'everstar-73a1c.firebaseapp.com',
  projectId: 'everstar-73a1c',
  storageBucket: 'everstar-73a1c.appspot.com',
  messagingSenderId: '215819035225',
  appId: '1:215819035225:web:c802133116dada08960748',
  measurementId: 'G-ZQ7RN4F560',
};

const shouldSkipMessaging = () => {
  if (typeof window === 'undefined') return true;

  // For frontend-only portfolio, completely disable FCM on localhost
  // This prevents any Firebase errors from appearing in the UI
  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  if (isLocalhost) return true;

  // Check for test/dev indicators
  const isPlaywright = !!(window as any).__playwright || navigator.webdriver;
  const isMockLogin = process.env.REACT_APP_USE_MOCK_LOGIN === 'true';
  const isTestEnv = process.env.NODE_ENV === 'test';

  return isPlaywright || isMockLogin || isTestEnv;
};

let messaging: Messaging | null = null;
let messagingInitialized = false;

// Lazy initialization - only initialize when actually needed
const initializeMessaging = () => {
  if (messagingInitialized || shouldSkipMessaging()) {
    return null;
  }

  try {
    const app = initializeApp(firebaseConfig);
    messaging = getMessaging(app);
    messagingInitialized = true;
  } catch (error) {
    console.warn('Firebase initialization skipped or failed:', error);
    messaging = null;
  }

  return messaging;
};

// Suppress any Firebase/notification permission errors
if (typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', (event) => {
    const errorStr = String(event.reason);
    if (errorStr.includes('permission-blocked') ||
        errorStr.includes('messaging/') ||
        errorStr.includes('FirebaseError')) {
      event.preventDefault();
      console.warn('FCM error suppressed for e2e/dev environment:', errorStr);
    }
  });

  window.addEventListener('error', (event) => {
    const errorStr = String(event.error);
    if (errorStr.includes('permission-blocked') ||
        errorStr.includes('messaging/') ||
        errorStr.includes('FirebaseError')) {
      event.preventDefault();
      console.warn('FCM error suppressed for e2e/dev environment:', errorStr);
    }
  });
}

const handleAlramPost = async (formData: { deviceToken: string }) => {
  const token = Store.getState().auth.accessToken;
  // console.log(token);
  try {
    const data = await fetchAlramPost(formData, token);
    // console.log('알람 api 생성 성공:', data);
  } catch (error) {
    console.error('알람 api 생성 실패:', error);
  }
};

async function requestPermission() {
  if (typeof Notification === 'undefined' || shouldSkipMessaging()) return;

  // Initialize messaging lazily
  const msg = initializeMessaging();
  if (!msg) return;

  try {
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      console.warn('알림 권한 허용 안됨 또는 미동의 상태');
      return;
    }

    const token = await getToken(msg, {
      vapidKey: process.env.REACT_APP_VAPIDKEY,
    }).catch((err) => {
      console.warn('FCM 토큰을 가져오지 못했습니다.', err);
      return null;
    });

    if (token) {
      handleAlramPost({ deviceToken: token });
    }
  } catch (error) {
    console.warn('알림 권한 요청 중 오류 발생:', error);
  }
}

function registerServiceWorker() {
  // Skip Firebase registration in mock/localhost/e2e mode
  if (shouldSkipMessaging()) {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => registration.unregister());
      });
    }
    return;
  }

  // Skip when notifications are explicitly denied to avoid runtime overlay in UI
  if (typeof Notification !== 'undefined' && Notification.permission === 'denied') {
    return;
  }

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/firebase-messaging-sw.js')
      .then((registration) => {
        // console.log('Service Worker 등록 성공:', registration);
        // 권한 요청 및 토큰 받아오기
        requestPermission();
      })
      .catch((error) => {
        console.log('Service Worker 등록 실패:', error);
      });
  }
}

// Delay initial check to allow test environment flags to be set
setTimeout(() => {
  if (window.location.pathname === '/earth') {
    registerServiceWorker();
  }
}, 100);

window.addEventListener('popstate', () => {
  if (window.location.pathname === '/earth') {
    registerServiceWorker();
  }
});
// eslint-disable-next-line no-restricted-globals
const originalPushState = history.pushState;
// eslint-disable-next-line no-restricted-globals
history.pushState = function (...args) {
  originalPushState.apply(this, args);
  const event = new Event('pushstate');
  window.dispatchEvent(event);
};

window.addEventListener('pushstate', () => {
  if (window.location.pathname === '/earth') {
    registerServiceWorker();
  }
});
