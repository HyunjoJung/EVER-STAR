// src/config.ts
const devConfig = {
  API_BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:8080',
};

const prodConfig = {
  API_BASE_URL: process.env.REACT_APP_API_URL || '',
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
