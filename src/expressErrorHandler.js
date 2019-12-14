module.exports = environment => {
  return (err, req, res, next) => {
    console.error(err)
    if (!err.status) {
      const isProduction = environment === 'production'
      return res.status(500).json({
        description: isProduction ? 'internal server error' : err.message
      })
    }
    if (err.status === 400) {
      return res.status(err.status).json({
        error: {
          attributes: err.message
        }
      })
    }
    return res.status(err.status).json({
      error: {
        description: err.message
      }
    })
  }
}
