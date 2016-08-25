/* Xana page module */
module.exports = class Xana {
  constructor() {
    this.selector = '#xana';
    this.page = document.querySelector(this.selector);
    document.addEventListener('set_page', this.setPageHandler.bind(this));
    document.addEventListener('hide_page', this.hidePage.bind(this));
  }
  setPageHandler(event) {
    let data = event.detail;
    if(data.page == this.selector) {
      this.setPage();
    }
  }
  setPage() {
    this.page.classList.add('show');
  }
  hidePage() {
    this.page.classList.remove('show');
  }
}