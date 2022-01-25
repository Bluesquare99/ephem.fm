import View from "./View.js";
import chroma from "chroma-js";

class audioView extends View {
  _parentEl = document.querySelector(".radio-table");

  addHandlerStation(handler) {
    this._parentEl.addEventListener("click", function (e) {
      const tableRow = e.target.closest("tr");
      console.log(chroma("#c2fa00").darken().saturate().hex());
      if (!tableRow) return;
      handler(tableRow.dataset.station);
    });
  }
}

export default new audioView();
