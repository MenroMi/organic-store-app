export enum ErrorMsgs {
  email = 'Your email does not match requirements. Please write your email!',
  password = 'Password should have: min 8 char., 1 lowercase letter, 1 uppercase letter, 1 special symbol and 1 number.',
  name = 'Your name have forbidden characters. Please check it!',
}

export enum ResponseMsgs {
  acceptRegistration = 'Great! Now check your email for further work with account.',
  rejectRegistration = 'Oh no. This email already exists. Please log in or rember your password.',
}
