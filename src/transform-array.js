module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error();
    }
    let transArr = [];
    let controlAction = null;
    for (let i = 0; i < arr.length || controlAction; i++) {
        if (controlAction) {
            switch (controlAction) {
                case '--double-next':
                    if (i < arr.length) transArr.push(arr[i]);
                    controlAction = null;
                    break;
                case '--double-prev':
                    if (transArr.length != 0) transArr.push(transArr[transArr.length - 1]);
                    controlAction = null;
                    break;
            }
        }
        if (isNaN(arr[i])) {
            if (arr[i] == '--double-next' || arr[i] == '--double-prev') {
                controlAction = arr[i];
                continue;
            }
        }
        if (i < arr.length) transArr.push(arr[i]);
    }
    arr = transArr;
    transArr = [];
    for (let i = 0; i < arr.length || controlAction; i++) {
        if (controlAction) {
            switch (controlAction) {
                case '--discard-next':
                    controlAction = null;
                    continue;
                    break;
                case '--discard-prev':
                    if (transArr.length != 0) transArr.pop();
                    controlAction = null;
                    break;
            }
        }
        if (isNaN(arr[i])) {
            if (arr[i] == '--discard-next' || arr[i] == '--discard-prev') {
                controlAction = arr[i];
                continue;
            }
        }
        if (i < arr.length) transArr.push(arr[i]);
    }

    return transArr;
};
