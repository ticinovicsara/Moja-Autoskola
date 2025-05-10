export const validatePassword = (password: string): string | null => {
  if (!password.trim()) {
    return "Lozinka je obavezna";
  }

  if (password.length < 8) {
    return "Lozinka mora imati najmanje 8 znakova";
  }

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/;

  if (!regex.test(password)) {
    return "Lozinka mora sadržavati veliko i malo slovo, broj i specijalni znak";
  }

  return null;
};
