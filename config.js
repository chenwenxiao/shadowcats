//exports.db = {
//  url: 'mongodb://127.0.0.1/',
//  name: 'test',
//  collection: 'users'  // collection name for MongoDB
//};

// exports.emailType = 'nodemailer-smtp-transport';
// exports.emailSettings = {
//   service: 'Mailgun',
//   auth: {
//     user: 'postmaster@username.mailgun.org',
//     pass: 'secret-password'
//   }
// };


exports.signup = {
  route: '/signup',
  tokenExpiration: '1 day',
  views: {
    signup: 'signup.jade',         // input fields 'name', 'email' and 'password' | local variable 'error' | POST /'signup.route'
    linkExpired: '',    // message link has expired | input field 'email' | POST /'signup.route'/resend-verification
    verified: '',       // message email is now verified and maybe link to /'login.route'
    signedUp: 'login.jade',       // message email has been sent => check your inbox
    resend: ''          // input field 'email' | local variable 'error' | POST /'signup.route'/resend-verification
  },
  handleResponse: true  // let lockit handle the response after signup success
};

// login settings
exports.login = {
  route: '/login',
  logoutRoute: '/logout',
  views: {
    login: 'login.jade',          // input fields 'login' and 'password' | POST /'login.route' | local variable 'error'
    loggedOut: 'login.jade'       // message that user logged out
  },
  handleResponse: true  // let lockit handle the response after login/logout success
};

// forgot password settings
exports.forgotPassword = {
  route: '/forgot-password',
  tokenExpiration: '1 day',
  views: {
    forgotPassword: '', // input field 'email' | POST /'forgotPassword.route' | local variable 'error'
    newPassword: '',    // input field 'password' | POST /'forgotPassword.route'/#{token} | local variable 'error'
    changedPassword: '',// message that password has been changed successfully
    linkExpired: '',    // message that link has expired and maybe link to /'forgotPassword.route'
    sentEmail: ''       // message that email with token has been sent
  }
};

// delete account settings
exports.deleteAccount = {
  route: '/delete-account',
  views: {
    remove: '',         // input fields 'name', 'phrase', 'password' | POST /'deleteAccount.route' | local variable 'error'
    removed: ''         // message that account has been deleted
  },
  handleResponse: true  // let lockit handle the response after delete account success
};

// lock account
// show warning after three failed login attempts
exports.failedLoginsWarning = 3;
// lock account after five failed login attempts
exports.failedLoginAttempts = 5;
// lock account for 20 minutes
exports.accountLockedTime = '20 minutes';
