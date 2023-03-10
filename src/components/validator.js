export const validator = (data, type) => {
  const errors = {};

  if (!data.email) {
    errors.email = "Email required!";
  } else if (
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email)
  ) {
    errors.email = "Enter a valid email address!";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "Password is required!";
  } else if (data.password.length < 8) {
    errors.password = "Password is too short!";
  } else if (
    !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]*$/.test(
      data.password
    )
  ) {
    errors.password(
      "Password most contain at least one  alphabetical, digit and special character!"
    );
  } else {
    delete errors.password;
  }

  if (type === "signup") {
    if (!data.name.trim()) {
      errors.name = "Username required!";
    } else if (!/^[a-zA-Z0-9._-]{4,20}$/.test(data.name)) {
      errors.name = "Enter a valid username!";
    } else {
      delete errors.name;
    }

    if (!data.confirmPassword) {
      errors.confirmPassword = "Confirm your password!";
    } else if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Password does not match!";
    } else {
      delete errors.confirmPassword;
    }

    if (data.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted =
        "You must accept our privacy policy!";
    }
  }

  return errors;
};
