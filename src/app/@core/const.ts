export enum IErrors {
  Error0 = 'Something went wrong',
  Error504 = 'Cannot communicate with server',
  Error404 = 'Record not found',
  Error400 = 'Bad payload',
  Error401 = 'Authentication error',
  Error403 = 'Forbidden',
  Error406 = 'Not Acceptable',
}

export enum ApiMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export enum ApiEndPoints {
  CHECK_SERVER = '/checkserver',
  LOGIN = 'login',
  USERS = 'users',
  ROLES = 'roles',
  LANGUAGES = 'languages',
  LOGOUT = '/auth/logout',
  REQUESTTORESET = 'request-forgetPassword',
  RESETPASSWORD = 'reset-password',
  OnePost = 'https://jsonplaceholder.typicode.com/comments?postId={{id}}',
}

export const constant = {
  letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
    28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
  YesNo: ['yes', 'no'],
  genders: ['male', 'female'],
  themes: [
    { name: 'theme1', color: '#00695c' },
    { name: 'theme2', color: '#00838e' },
    { name: 'theme3', color: '#1775d1' },
    { name: 'theme4', color: '#6574cf' },
    { name: 'theme5', color: '#0455c0' },
  ],
  resources: [],
};
