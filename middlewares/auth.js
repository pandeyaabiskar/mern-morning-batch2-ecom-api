const logger = (req, res, next) => {
    req.greet = "Hi"
    console.log("This is a logger middleware");
    next();
}

const validateUser = (req, res, next) => {
    console.log("User is validated");
    next();
}

module.exports = {logger, validateUser}