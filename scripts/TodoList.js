class TodoList {
  #container;
  constructor(containerSelector) {
    this.#container = document.querySelector(containerSelector);
  }

  addCard = (card) => {
      this.#container.append(card);
  }
}

export default TodoList;
