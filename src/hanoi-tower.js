module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const turns = Math.pow(2, disksNumber) - 1;
    const seconds = turns * 3600 / turnsSpeed;
    return {
        turns: turns,
        seconds: seconds,
    };
}