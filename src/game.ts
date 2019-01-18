import _ from 'lodash';

export default class Game {
    size: number;
    winnerIndex: number;
    score = 0;

    constructor(size: number = 9) {
        this.size = size;       
        this.shuffle(); 
    }

    click(idx: number) {
        if (this.winnerIndex === idx) {
            this.score += 10;
        } else {
            this.score -= 5;
        }
        this.shuffle();
    }    

    shuffle() {
        this.winnerIndex = _.random(this.size - 1);
    }
}
