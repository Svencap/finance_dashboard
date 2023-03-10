const apiPath = '/api';

export default {
  loginPath: () => [apiPath, 'login'].join('/'),
  googleAuthPath: () => [apiPath, 'googleAuth'].join('/'),
  dataPath: () => [apiPath, 'users'].join('/'),
  signupPath: () => [apiPath, 'signup'].join('/'),
  chatPagePath: () => '/',
  loginPagePath: () => '/login',
  signupPagePath: () => '/signup',
};