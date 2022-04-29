export const getEmailValidationRules = (
  requiredMessage: string = "Email is required",
  invalidMessage: string = "Email is invalid"
) => {
  return {
    validate: (value: string) => (value.trim() ? true : requiredMessage),
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: invalidMessage,
    },
  };
};

export const getPasswordValidationRules = (
  requiredMessage: string = "Password is required",
  invalidMessage: string = "Password must be 7-15 characters a combination of English letters and numbers with at least one capital letter"
) => {
  return {
    validate: (value: string) => (value.trim() ? true : requiredMessage),
    pattern: {
      value: /^(?=.*?[A-Z])(?=.*?[0-9]).{7,15}$/,
      message: invalidMessage,
    },
  };
};

export const getConfirmValidationRules = (password: string) => {
  return {
    validate: (value: string) =>
      value.trim()
        ? value === password
          ? true
          : "Passwords do not match"
        : "Confirm Password is required",
  };
};

export const getRequiredRules = (label: string, requiredMessage?: string) => {
  return {
    validate: (value: string) =>
      value.trim()
        ? true
        : requiredMessage
        ? requiredMessage
        : `${label} is required`,
  };
};
