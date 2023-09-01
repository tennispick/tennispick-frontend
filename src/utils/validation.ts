const userValidation = {
	id: '',
	email: '',
	passwordValidation: /^(?=.*[a-zA-Z])(?=.*[$@$!%*#?&])(?=.*[0-9]).{8,25}$/,
};

/** Regex */
const emailRegex =
	/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[$@$!%*#?&])(?=.*[0-9]).{8,25}$/;
const phoneNumberRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

export { emailRegex, passwordRegex, phoneNumberRegex };
