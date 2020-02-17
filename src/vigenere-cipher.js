class VigenereCipheringMachine {
    shift = {
        A: 0,
        B: 1,
        C: 2,
        D: 3,
        E: 4,
        F: 5,
        G: 6,
        H: 7,
        I: 8,
        J: 9,
        K: 10,
        L: 11,
        M: 12,
        N: 13,
        O: 14,
        P: 15,
        Q: 16,
        R: 17,
        S: 18,
        T: 19,
        U: 20,
        V: 21,
        W: 22,
        X: 23,
        Y: 24,
        Z: 25,
    }
    constructor(isStraight) {
        if (typeof isStraight == 'undefined') {
            this.isStraight = true;
        } else {
            this.isStraight = isStraight;
        }
    }
    encrypt(message, key) {
        if (typeof message == 'undefined' || typeof key == 'undefined') {
            throw new Error();
        }
        key = key.toUpperCase();
        let keySymbIndex = 0;
        message = message.replace(/[a-z]/ig, match => {
            if (keySymbIndex >= key.length) {
                keySymbIndex = 0;
            }
            let shift = this.shift[key[keySymbIndex++]];
            let newStrCode = match.toUpperCase().codePointAt(0) + shift;
            if (newStrCode > 90) {
                newStrCode = newStrCode - 26;
            }
            return String.fromCodePoint(newStrCode);
        });
        if (this.isStraight) {
            return message;
        } else {
            return message.split('').reverse().join('');
        }
    }
    decrypt(message, key) {
        if (typeof message == 'undefined' || typeof key == 'undefined') {
            throw new Error();
        }
        key = key.toUpperCase();
        let keySymbIndex = 0;
        message = message.replace(/[a-z]/ig, match => {
            if (keySymbIndex >= key.length) {
                keySymbIndex = 0;
            }
            let shift = this.shift[key[keySymbIndex++]];
            let newStrCode = match.toUpperCase().codePointAt(0) - shift;
            if (newStrCode < 65) {
                newStrCode = newStrCode + 26;
            }
            return String.fromCodePoint(newStrCode);
        });
        if (this.isStraight) {
            return message;
        } else {
            return message.split('').reverse().join('');
        }
    }
}

module.exports = VigenereCipheringMachine;
