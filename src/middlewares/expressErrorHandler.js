module.exports = environment => {
  return (err, req, res, next) => {
    console.error(err);

    return res.status(err.status || 500).json({
      error:
        (!err.status || err.status === 500) && environment !== 'development'
          ? 'Internal Server Error'
          : err.message,
      status: err.status || 500
    });
  };
};
