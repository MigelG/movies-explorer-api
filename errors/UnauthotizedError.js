module.exports = class UnauthotizedError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
};
