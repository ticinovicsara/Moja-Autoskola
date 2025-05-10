export const isValidCroatianPhoneNumber = (phone: string) => {
  const cleanPhone = phone.replace(/\s/g, "");

  return /^(\+385\d{9,10}|0\d{9,10})$/.test(cleanPhone);
};
