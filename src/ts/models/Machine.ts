import { Player, Cards } from './index';

export default class Machine extends Player {

  play(playerPoints: number, deck: Cards) {
    while (playerPoints < 21) {
      this.pullCard(deck);
      if (this.Points > playerPoints) break;
    }
  }
}