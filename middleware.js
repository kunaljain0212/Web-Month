const logger = (req, res, next) => {
  console.log("I run before every req!!");
  next();
};

module.exports = logger;
