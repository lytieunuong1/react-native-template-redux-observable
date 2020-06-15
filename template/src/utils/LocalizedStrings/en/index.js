import errorCodes from './errors'
import validations from './validations';

export default string = {
  login: {
    title: 'Redux Observable Demo',
    signupButton: 'Register an account?',
    loginButton: 'Login'
  },
  signup: {
    title: 'Register for Demo',
    policyAgreement: 'By tapping Register, I agree to Demo\'s ',
    terms: 'Term of Service',
    and: ' and ',
    privacy: 'Privacy Statement',
    registerButton: 'Register',
  },
  home: {
    title: 'Redux Observable',
    welcome: 'Welcome, {{0}}'
  },
  controls: {
    email: 'Your email',
    password: 'Password'
  },
  errorCodes,
  validations,
}