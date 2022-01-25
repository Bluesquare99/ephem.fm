import View from "./View.js";

class iconView extends View {
  _parentEl = document.querySelector(".icon--table");

  addHandlerTable(handler) {
    this._parentEl.addEventListener("click", function (e) {
      const tableIcon = e.target.closest(".icon--table");
      const table = document.querySelector(".radio-table");
      if (!tableIcon) return;
      handler(table);
    });
  }
}

export default new iconView();
