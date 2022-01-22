export default class View {
  _data;

  render(station, weather, render = true) {
    this._station = station;
    this._weather = weather;
    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
    this._parentEl.innerHTML = "";
  }
}
