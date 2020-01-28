Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
 
const encryptedString = cryptr.encrypt('[1,3,2,4]');
const decryptedString = cryptr.decrypt(encryptedString);
 


console.log(encryptedString);
console.log(JSON.parse(decryptedString)[0]);
console.log(cryptr.decrypt("7687371625955f1bca749193b37eeb12bd63f2a1122c4256adb3b1176911e8c8f6605fb39beb88dc16f4d44c8b3b1ded62a3c129cfca2eeb73e586b8bf75e1b98927b851bccbf3d8a8a60f3b3838b76bbc91a5118cb38f58c0513b95857fe0e9d193d4cf9a2566ed1d"));