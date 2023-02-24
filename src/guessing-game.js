class GuessingGame {
    constructor() {
        this.max = 0;
        this.min = 0;
        this.value = 0
    }

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
        this.value = Math.round((this.max + this.min) / 2)
        return this.value
    }

    lower() {
        this.max = this.value;
    }

    greater() {
        this.min = this.value;
    }
}

module.exports = GuessingGame;
