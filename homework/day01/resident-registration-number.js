import { checkValidationNum, EncryptionNum, printNum } from './number.js';

function residentRegistrationNumber(num) {
    const isValid = checkValidationNum(num)
    if (isValid === true){
        const value = EncryptionNum(num);
        printNum(value);
    };
}
residentRegistrationNumber('920324-0102271');