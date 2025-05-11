export const isValidCroatianPhoneNumber = (phone: string) => {
  const cleanPhone = phone.replace(/\s/g, "");

  const regex = /^\+3859[1-5]\d{3}\d{4}$/;

  return regex.test(cleanPhone);
};
