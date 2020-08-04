export default class Team {
  constructor() {
    this.players = new Set();
  }

  addPlayer(player) {
    this.players.add(player);
  }

  [Symbol.iterator]() {
    return {
      current: 0,
      playersArr: [...this.players],
      next() {
        if (this.current <= this.playersArr.length - 1) {
          this.current += 1;
          return { done: false, value: this.playersArr[this.current - 1] };
        }
        return { done: true };
      },
    };
  }
}
