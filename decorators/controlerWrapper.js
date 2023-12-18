module.exports = (controllerCb) => {
  const fn = async (req, res, next) => {
    try {
      await controllerCb(req, res);
    } catch (error) {
      next(error);
    }
  };

  return fn;
};
