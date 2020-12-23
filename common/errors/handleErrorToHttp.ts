// TODO:
export default (error: Error) => {
  console.log('ERROR: ', error);

  class SampleExternalServiceError {}
  const errors = [
    {
      type: SampleExternalServiceError,
      statusCode: 503,
      errorCode: 'external_service_error',
      errorMessage:
        'Something went wrong trying to access an external service. Try again later.'
    }
  ];

  const defaultError = {
    type: Error,
    statusCode: 500,
    errorCode: 'internal_server_error',
    errorMessage: 'Something went wrong, please try again later.'
  };

  const matchedError =
    errors.filter(c => error instanceof c.type)[0] || defaultError;

  return matchedError;
};
