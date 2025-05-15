export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};

export const validatePassword = (password: string): string | null => {
    if (!password.trim()) {
        return "Lozinka je obavezna";
    }

    if (password.length < 5) {
        return "Lozinka mora imati najmanje 8 znakova";
    }

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/;

    if (!regex.test(password)) {
        return "Lozinka mora sadržavati veliko i malo slovo, broj i specijalni znak";
    }

    return null;
};

export const isValidCroatianPhoneNumber = (phone: string) => {
    const cleanPhone = phone.replace(/\s/g, "");

    const regex = /^\+3859[1-5]\d{3}\d{4}$/;

    return regex.test(cleanPhone);
};
