const isDateValid = (date : string) =>{
    const splitDateS : string[] = date.split("-")
    if(splitDateS.length!=3) return false

    const year : number  = Number(splitDateS[0])
    const month : number = Number(splitDateS[1])
    const day : number = Number(splitDateS[2])

    //check if year is valid aka if it's older than 1800
    if (year<1800) return false

    //check if month is valid aka if it's between 1 and 12
    if (month>12||month<1) return false

    //check if day is valid aka bigger than 1 and lower the 30 for pair month or 31 for the other
    if (day<1|| day>31 ||( month%2==0&&day>30)) return false
    
    return true
}


const regexMailString : string = "^.*@.*\.(a(d|e|f|g|i|l|m|n|o|r|s|t|q|u|w|x|z)|b(a|b|d|e|f|g|h|i|j|l|m|n|o|r|s|t|v|w|y|z)|c(a|c|d|f|g|h|i|k|l|m|n|o|r|u|v|x|y|z)|d(e|j|k|m|o|z)|e(c|e|g|h|r|s|t)|f(i|j|k|m|o|r)|g(a|b|d|e|f|g|h|i|l|m|n|p|q|r|s|t|u|w|y)|h(k|m|n|r|t|u)|i(d|e|q|l|m|n|o|r|s|t)|j(e|m|o|p)|k(e|g|h|i|m|n|p|r|w|y|z)|l(a|b|c|i|k|r|s|t|u|v|y)|m(a|c|d|e|f|g|h|k|l|m|n|o|q|p|r|s|t|u|v|w|x|y|z)|n(a|c|e|f|g|i|l|o|p|r|u|z)|om|p(a|e|f|g|h|k|l|m|n|r|s|t|w|y)|qa|r(e|o|s|u|w)|s(a|b|c|d|e|g|h|i|j|k|l|m|n|o|r|t|v|y|z)|t(c|d|f|g|h|j|k|l|m|n|o|r|t|v|w|z)|u(a|g|m|s|y|z)|v(a|c|e|g|i|n|u)|w(f|s)|y(e|t)|z(a|m|w))$"
const regexMail : any = new RegExp(regexMailString)

const isMailValid = (mail : string) => {
    //check if the is mail is like XXX@YYY.fr/com/eu following the ISO 3166-1 alpha-2 format
    return regexMail.test(mail)
}

const isPhoneNumberValid = (phone : string) => {
    return !(phone.length>12||phone.length<6)
}

export {
    isDateValid,
    isMailValid,
    isPhoneNumberValid
}

