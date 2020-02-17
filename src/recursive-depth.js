module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 1;
        if (arr.some(elem => Array.isArray(elem))) {
            let depthArrays = [];
            for (let elem of arr) {
                if (Array.isArray(elem)) {
                    depthArrays.push(elem);
                }
            }
            depth += Math.max(...depthArrays.map(elem => this.calculateDepth(elem)));
        }
        return depth;
    }
};