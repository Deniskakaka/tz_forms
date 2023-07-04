type user = { name: string; email: string; password: string };

export const validationEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
};

export const validationName = (name: string): boolean => {
  return /^[a-zA-Z]{3,}$/.test(name);
};

export const validatePassword = (password: string): boolean => {
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;

  return uppercaseRegex.test(password) && lowercaseRegex.test(password);
};

export const verificationName = (name: string, list: user[]): user => {
  return list.filter((el: user) => el.name === name)[0];
};

export const generateToken = (): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const tokenLength = 32;
  let token = "";

  for (let i = 0; i < tokenLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters.charAt(randomIndex);
  }

  return token;
};
