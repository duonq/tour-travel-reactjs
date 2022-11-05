/* eslint-disable */
export const regex = {
    full_name_vn:
        /^[A-Za-zảáàạãăắằặẵâấầẫậĐđèéẹẽêếềệễìíịĩóòọõôốồỗộơớờợỡùuúụũưứừựữýỳỵỹẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠÈÉẸẼÊẾỀỆỄÍÌỊĨÓÒÕỌÔỒỐỖỘƠỚỜỠỢÙÚỤŨƯỪỮỰÝỲỸỴ]+(\s[A-Za-zảáàạãăắằặẵâấầẫậĐđèéẹẽêếềệễìíịĩóòọõôốồỗộơớờợỡùúụũưứừựữýỳỵỹẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠÈÉẸẼÊẾỀỆỄÍÌỊĨÓÒÕỌÔỒỐỖỘƠỚỜỠỢÙÚỤŨƯỪỮỰÝỲỸỴ]+)*$/,
    // user_name: /^(?=.{3,20}$)(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
    phone_number: /^[0-9]+$/,
    password:
        /^(?!.*[!"#$%&'\\()*+,-.:;\[\]<=>?@/^_`{|}~]{2})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!"#$%&'\\()*+,-.:;\[\]<=>?@/^_`{|}~])([a-zA-Z0-9!"#$%&'\\()*+,-.:;\[\]<=>?@/^_`{|}~]+)$/,
    // email: new RegExp(/^[a-zA-Z0-9_.]{1,200}[@][a-z]{1,20}[.][a-z]{1,25}(.[a-z]+)?$/),
    email: new RegExp(
        /^(?!.*[._+@]{2})[a-zA-Z0-9]([a-zA-Z0-9_.+])*[@]([a-z]+)[.]([a-z]+)(.[a-z]+([+])?)?$/
    ),
    lengthNameEmail: new RegExp(/^([a-zA-Z0-9_.+]){1,63}@/),
    urlHttps:
        /^(?=.{1,1023}$)(https:|http:)([a-zA-Z0-9\[\]"{}=!:,%&?@+'_./-]+)([.][a-zA-Z0-9\[\]"{}=!:,%&?@+'_./-]+)$/,
    name: new RegExp(/^([a-zA-Z]+){1,100}$/),
    money: new RegExp(/^(?=.{1,14}$)\d+((,)*(\d+)*([円]*))*$/),
    lengthPassword: new RegExp(/^(.{8,30}$)$/),
    lengthPhone: new RegExp(/^(.{1,15}$)$/),
    lengthOfficeName: new RegExp(/^(.{1,30}$)$/),
    lengthIntroText: new RegExp(/^(.{1,150}$)$/),
    lengthNumberphone: new RegExp(/^(.{1,20}$)$/),
    lengthPostCode: new RegExp(/^(.{1,10}$)$/),
    length100: new RegExp(/^[\s\S]{1,100}$/),
    length20: new RegExp(/^(.{1,20}$)$/),
    length50: new RegExp(/^[\s\S]{1,50}$/),
    length255: new RegExp(/^[\s\S]{1,255}$/),
    length1023: new RegExp(/^[\s\S]{1,1023}$/),
    length500: new RegExp(/^[\s\S]{1,500}$/),
    length3000: new RegExp(/^[\s\S]{1,3000}$/),
    space_top_or_end: new RegExp(/^\s+\S+|\S+\s+?$/),
    space_full: new RegExp(/^\s+$/),
    only_space: new RegExp(/^\s+$/i),
    // string_remove_space_of_start: new RegExp(/^\s+|\s+$/g),
    string_remove_space_of_start: new RegExp(/^\s*(\w.*)$/),
    // emoji: new RegExp(
    //     /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/  // regex emoji include special characters
    // )
    emoji: new RegExp(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD10-\uDDFF])/ // regex emoji not include special characters
    ),
    newline: new RegExp(/\n|\r\n/),
    fullwidthHiragana: /^[ぁ-ん\s]+$/,
    onlyNumber: /^[0-9\-)]*$/,
    halfwidthAlphabet: /^[a-zA-Z0-9]+$/,
    halfwidthNumber: /^[0-9]+$/,
    regexUrl: new RegExp(
        "^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?"
    ),
    specialCharacters: /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
}
