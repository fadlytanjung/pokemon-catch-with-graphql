const rgEmail = new RegExp(
  [
    '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)',
    '(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])',
    '(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
  ].join('|'),
);
const rgPhone = /^((?:\+62|62)|0)[8]{1}[0-9]{6,12}$/;
const rgPassword = (v) => {
  return /[A-Z]/.test(v) && /[0-9]+/.test(v) && v.length >= 8;
};

function validKTP(value) {
  const result = parseInt(value);
  return Number.isInteger(result) && result.toString().length === 16;
}
function validSIM(value) {
  const result = parseInt(value);
  return Number.isInteger(result) && result.toString().length === 12;
}
function validPassport(value) {
  return (
    value?.charCodeAt(0) >= 65 &&
    value?.charCodeAt(0) <= 90 &&
    value?.charCodeAt(1) >= 65 &&
    value?.charCodeAt(1) <= 90 &&
    value?.length === 9
  );
}

export const isEmail = (value) => rgEmail.test(value);
export const isPassword = (value) => rgPassword(value);
export const isPhone = (value) => rgPhone.test(value);
export const isKTP = (value) => validKTP(value);
export const isSIM = (value) => validSIM(value);
export const isPassport = (value) => validPassport(value);
