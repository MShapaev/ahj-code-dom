export default class Goblin {
  constructor() {
    this.interval = null;
  }

  changePosition() {
    const position = [...document.querySelectorAll(".block")];
    let goblinPosition = 0;
    this.interval = setInterval(() => {
      const random = Math.floor(Math.random() * position.length);
      if (random !== goblinPosition) {
        position[goblinPosition].classList.remove("goblin");
        position[random].classList.add("goblin");
        goblinPosition = random;
      }
    }, 1000);
  }
}
