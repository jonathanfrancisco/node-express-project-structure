const { UserInputError } = require('apollo-server-express');

module.exports = (requestDTO, joiSchema) => {
  const { error, value } = joiSchema.validate(requestDTO, {
    abortEarly: false,
    errors: {
      label: 'key'
    }
  });
  if (error) {
    throw new UserInputError('BAD_REQUEST', {
      validationErrors: error.details
    });
  }

  return value;
};
