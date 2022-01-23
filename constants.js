const ErrorMessagesEnum = Object.freeze({
  DEFAULT: 'An error has occured',
  USER_NOT_FOUND: 'No user found',
  USER_INFO_NOT_FOUND: 'No user info found',
});

const SuccessMessageEnum = Object.freeze({
  USER_REMOVED: 'User deleted successfully',
});

module.exports = [ErrorMessagesEnum, SuccessMessageEnum];
