import { objEn, objDe } from './temp76';

let curentLocale = 'en';

export default function returnKeyFromString(S) {

    let obj = (curentLocale === 'en') ? objEn : objDe;
    // for (let [key, val] of Object.entries(obj)) {
    //     if (val === S) return key;
    // }

    let [resultKey,] = Object.entries(obj).find(o => o[1] === S);
    return resultKey;
}



//
