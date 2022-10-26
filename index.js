const validator=require ('validator')
let str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
console.log(validator.isEmail('a@gmail.com'))
console.log(validator.contains(str,'abc'));
console.log(validator.equals('abc','abc'))
console.log(validator.isAlpha(str))//only letter is present
console.log(validator.isAlphanumeric(str))
console.log(validator.isAscii(str))
console.log(validator.isBase32(str))
console.log(validator.isBtcAddress(str))
console.log(validator.isDate(str))
console.log(validator.isDecimal('0.001'))
console.log(validator.isDivisibleBy('0.001','0.001'))
console.log(validator.isFloat('0.001'))
console.log(validator.isIP('192.168.8.8'))
console.log(validator.isJSON("{'a':'1'}"))
console.log(validator.isMongoId('6358d37137213be7cdc7f308'))
