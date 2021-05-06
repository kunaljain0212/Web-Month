const logger = (req, res, next) => {
  console.log("I run before every req!!");
  next();
};

const secondLogger = (req, res, next) => {
  console.log("I run before every req secondLogger!!");
  next();
};

module.exports = { logger, secondLogger };
