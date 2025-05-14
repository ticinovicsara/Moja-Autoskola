export const validateCardNumber = (num: string): string => {
  const cleanNum = num.replace(/\s/g, "");
  if (!/^\d{16}$/.test(cleanNum)) {
    return "Broj kartice mora sadržavati 16 znamenki";
  }
  return "";
};

export const validateOwner = (name: string): string => {
  if (name.trim().length < 3)
    return "Molimo unesite ispravno ime vlasnika kartice";
  if (!/^[a-zA-Z\s]+$/.test(name)) return "Ime smije sadržavati samo slova";
  return "";
};

export const validateExpireDate = (date: string): string => {
  if (!/^\d{2}\/\d{2}$/.test(date)) return "Format mora biti MM/GG";

  const [month, year] = date.split("/").map((part) => parseInt(part, 10));
  const now = new Date();
  const currentYear = now.getFullYear() % 100;
  const currentMonth = now.getMonth() + 1;

  if (month < 1 || month > 12) return "Neispravan mjesec";
  if (year < currentYear || (year === currentYear && month < currentMonth))
    return "Kartica je istekla";

  return "";
};

export const validateCVV = (cvv: string): string => {
  if (!/^\d{3,4}$/.test(cvv)) {
    return "CVV mora imati 3 ili 4 znamenke";
  }
  return "";
};

export const formatCardNumberInput = (value: string): string => {
  const cleanValue = value.replace(/\D/g, "");
  const truncated = cleanValue.slice(0, 16);
  return truncated.replace(/(\d{4})(?=\d)/g, "$1 ");
};

export const formatExpireDateInput = (value: string): string => {
  const cleanValue = value.replace(/\D/g, "");
  const truncated = cleanValue.slice(0, 4);
  if (truncated.length > 2) {
    return truncated.replace(/(\d{2})(\d{1,2})/, "$1/$2");
  }
  return truncated;
};

export const formatCVVInput = (value: string): string => {
  const cleanValue = value.replace(/\D/g, "");
  return cleanValue.slice(0, 3);
};
