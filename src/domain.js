import validateJs from 'validate.js';

const formatErrors = errors => {
  if (!errors) {
    return {};
  }
  return Object.keys(errors)
    .reduce((acc, prop) => {
      acc[prop] = errors[prop][0];
      return acc;
    }, {});
};

export const email = {
  presence: {
    message: 'Email is required',
  },
  email: {
    message: 'A valid email must be entered',
  },
};

export const name = {
  presence: {
    message: 'Name is required',
  },
  length: {
    minimum: 2,
    maximum: 10,
    message: 'Name must be between 2 and 10 characters'
  }
};

export const UserSchema = {
  email,
  name,
};
export const validateUser = user => formatErrors(validateJs(user, UserSchema));
