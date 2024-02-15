export const loginFormValidation = (email,password) => {
    const validateEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    const validatePassword = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)
    if(!validateEmail) {return "E-mail is not valid"}
    if(!validatePassword) {return "Password is not valid"}

    return null;
}