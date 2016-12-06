export const myMixin = {
  computed: {
    compReverse() {
      return Array.prototype.map.call(this.testText, x => x).reverse().join('');
    },
    compCountLength() {
      return `${this.testText} (${this.testText.length})`;
    }
  }
};
