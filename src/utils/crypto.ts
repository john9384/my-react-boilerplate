import CryptoJS from 'crypto-js';

// Todo Move this to env
const secret =
  'a98d7f9a7ro3wur98dsfap9d87aoeu#Q@#$@#GARE%#$^%#QRTSR^$%ahoufdsou8';

export const encodeData = (payload: any) => {
  return CryptoJS.AES.encrypt(JSON.stringify(payload), secret).toString();
};

export const decodeData = (token: string) => {
  return JSON.parse(
    CryptoJS.AES.decrypt(token, secret).toString(CryptoJS.enc.Utf8),
  );
};
