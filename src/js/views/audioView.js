import View from "./View.js";

class audioView extends View {
  _parentEl = document.querySelector(".radio-table");

  addHandlerClick(handler) {
    this._parentEl.addEventListener("click", function (e) {
      const btn = e.target.closest("tbody");
      if (!btn) return;
      // get station from here and put station name is as input in handle
      // add streaming urls to model
      handler();
    });
  }
}

export default new audioView();
