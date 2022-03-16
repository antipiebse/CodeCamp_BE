import { checkValidationNum, EncryptionNum, printNum, checkValidationhyphen } from './number.js';

function residentRegistrationNumber(num) {
    if (checkValidationhyphen(num)){
        if (checkValidationNum(num)){
            printNum(EncryptionNum(num));
        }
    };
}
residentRegistrationNumber('920324-0001271');