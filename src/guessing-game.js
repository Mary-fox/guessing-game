class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.max = max;
        this.min = min;
        this.guessingValue = 0;
    }

    guess() {
        this.guessingValue = Math.round((this.min + this.max) / 2);
        return this.guessingValue;
    }

    lower() {
        this.max = this.guessingValue;
    }

    greater() {
        this.min = this.guessingValue;
    }
}

module.exports = GuessingGame;
