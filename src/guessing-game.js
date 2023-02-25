class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
        this.guessingValue = Math.round(((this.max - this.min) / 2) + this.min);
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
