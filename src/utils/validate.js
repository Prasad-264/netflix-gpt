
export const checkValidation = (email, password, name) => {
	const validateEmail = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
	const validatePassowrd = /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/.test(password);
	const validateName = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(name);	

	if (!validateEmail) return "Enter valid email";
	if (!validatePassowrd) return "Enter valid password";
	if (name !== null && !validateName) return "Enter valid name";

	return null;
}