const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

/**
 * 
 * @param params {length: number, includeLowercase: boolean, includeUppercase: boolean, includeNumbers: boolean, includeSymbols: boolean}
 * @returns 
 */
export default function generatePassword(params) {
    const pwdBase = generatePasswordCharacterSet(params);
   const  result = buildPasswordFromBase(params, pwdBase);
    return result;
}

function buildPasswordFromBase(params, pwdBase) {
   let result="";
    for (let index = 0; index < params.length; index++) {
        const rnd = getRandomNumber(pwdBase.length);
        result += pwdBase.charAt(rnd);
    }
    return result;
}

function generatePasswordCharacterSet(params) {
    let pwdBase = "";
    if (params.includeLowercase) pwdBase += lowercase;
    if (params.includeUppercase) pwdBase += uppercase;
    if (params.includeNumbers) pwdBase += numbers;
    if (params.includeSymbols) pwdBase += symbols;
    return pwdBase;
}

function getRandomNumber(length) {
    return Math.floor(Math.random() * length);
}
