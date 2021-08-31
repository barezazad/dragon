export const environment = {
  production: false,
  localStorageKey: 'operator-dragon',
  apiVersion: 'v1',
  apiUrl: '/api/gopher/v1',
  snackBarDuration: 8000,
  perPageOptions: [10, 25, 50, 100, 500],
  encryptKey: '6RUi7LqWcWfa7ghswdjhgjhdyuZN0QB2pBjyrrgo',
};

// electron env we have to call to backend directly without proxy
// export const environment = {
//   production: true,
//   apiVersion: 'v1',
//   apiUrl: 'http://0.0.0.0:8080/api/gopher/v1',
//   apiUrlLink: 'http://0.0.0.0:8080/api/gopher/v1',
//   snackBarDuration: 8000,
// };
