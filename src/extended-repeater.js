module.exports = function repeater(str, options) {
    let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;
    let sep = separator ? separator : '+';
    let add = typeof addition !== 'undefined' ? addition : '';
    let addSep = additionSeparator ? additionSeparator : '';
    let addBase = add;
    if (additionRepeatTimes) {
        for (let i = 1; i < additionRepeatTimes; i++) {
            add += addSep + addBase;
        }
    }
    let strBase = str + add;
    str = strBase;
    if (repeatTimes) {
        for (let i = 1; i < repeatTimes; i++) {
            str += sep + strBase;
        }
    }
    return str;
};
