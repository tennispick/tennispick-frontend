import { ObjectType } from 'app/src/types';

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

const handleArrayValidationCheck = (
  target: Array<unknown>,
  key: string,
  validation: ObjectType<string>,
) => {
  const validationSet: ObjectType<string> = validation;
  if (target.length === 0) {
    alert(validationSet[key]);
    return false;
  }
  return true;
};

const handleArrayStringValidationCheck = (
  target: unknown,
  key: string,
  validation: ObjectType<string>,
) => {
  const validationSet: ObjectType<string> = validation;
  if (target === '') {
    alert(validationSet[key]);
    return false;
  }
  return true;
};

const handleInputValidationCheck = (
  target: ObjectType<unknown | unknown[]>,
  validation: ObjectType<string>,
) => {
  let result = true;
  for (const key of Object.keys(target)) {
    const type = typeof target[key];

    if (type === 'string') {
      result = handleArrayStringValidationCheck(target[key], key, validation);
      if (!result) break;
    } else if (type === 'object') {
      result = handleArrayValidationCheck(
        target[key] as unknown[],
        key,
        validation,
      );
      if (!result) break;
    }
  }

  return result;
};

const handleInputArrayValidationCheck = (
  target: ObjectType<unknown>,
  validation: ObjectType<string>,
) => {
  let result = true;
  const { schedule } = target;

  result: for (
    let index = 0;
    index < (schedule as Array<ObjectType<string>>).length;
    index++
  ) {
    const item = (schedule as Array<ObjectType<string>>)[index];

    for (const key of Object.keys(item)) {
      const type = typeof item[key];

      if (type === 'string') {
        result = handleArrayStringValidationCheck(item[key], key, validation);
        if (!result) break result;
      } else if (type === 'object') {
        result = handleArrayValidationCheck(
          item[key] as unknown as unknown[],
          key,
          validation,
        );
        if (!result) break result;
      }
    }
  }

  if (!result) return false;

  return result;
};

export {
  userValidation,
  emailRegex,
  passwordRegex,
  phoneNumberRegex,
  handleArrayStringValidationCheck,
  handleInputValidationCheck,
  handleInputArrayValidationCheck,
};
