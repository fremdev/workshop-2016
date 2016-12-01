new Vue({
  el: '#app',
  data: {
    isPlaying: false,
    gameLog: [],
    userScore: 100,
    monsterScore: 100
  },
  methods: {
    getRandomNum: function(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    monsterHits: function(min, max) {
      var hitScore = this.getRandomNum(min, max);
      this.gameLog.push('Monster hits player for ' + hitScore);
      this.userScore -= hitScore;
    },
    playerHits: function(min, max) {
      var hitScore = this.getRandomNum(min, max);
      this.gameLog.push('Player hits monster for ' + hitScore);
      this.monsterScore -= hitScore;
    },
    playerHeals: function() {
      this.gameLog.push('Player heals himself for 10');
      this.userScore += 10;
    },
    attack: function() {
      this.monsterHits(5, 10);
      this.playerHits(5, 10);
    },
    specialAttack: function() {
      this.monsterHits(8, 12);
      this.playerHits(8, 15);
    },
    heal: function() {
      this.monsterHits(5, 15);
      this.playerHeals();
    },
    startGame: function() {
      this.isPlaying = true;
      this.gameLog = [];
      this.userScore = 100;
      this.monsterScore = 100;
    }
  },
  watch: {
    userScore: function() {
      var response;
      if (this.userScore <= 0 && this.userScore < this.monsterScore) {
        this.isPlaying = false;
        response = confirm('You lost. Play again?');
      }
      if (this.monsterScore <= 0 && this.monsterScore < this.userScore) {
        this.isPlaying = false;
        response = confirm('You won. Play again?');
      }
      if(response) {
        this.startGame();
      }
    }
  }
});
