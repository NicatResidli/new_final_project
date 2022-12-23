class ThirdPartyApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
    // this.key = process.env.REACT_APP_API_KEY;
    this.key = '9d94fe1b6c304e7dbb89fea99b708a3f'
    this._today = new Date();
  }


  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.statusText}`)
  }

  _getLastWeek() {
    this._lastWeek = new Date(new Date().getTime() - (7 * 24 * 60 * 60 * 1000));
    return this._lastWeek;
  }

  _getTodayDisplay() {
    const day = this._today.getDate();
    const month = this._today.getMonth() + 1;
    const year = this._today.getFullYear();
    this._todayDisplay = `${year}-${month}-${day}`;
    return this._todayDisplay;
  }

  _getLastWeekDisplay() {
    this._lastWeek = this._getLastWeek();
    const lastWeekYear = this._lastWeek.getFullYear();
    const lastWeekMonth = this._lastWeek.getMonth() + 1;
    const lastWeekDay = this._lastWeek.getDate();
    this._lastWeekDisplay = `${lastWeekYear}-${lastWeekMonth}-${lastWeekDay}`;
    return this._lastWeekDisplay;
  }

  async getArticles(keyword) {
    return fetch(`${this._baseUrl}/v2/everything?q=${keyword}&from=${this._getLastWeekDisplay()}&to=${this._getTodayDisplay()}&pageSize=100&apiKey=${this.key}`)
      .then((res) => this._checkResponse(res))
      .then((res) => res.articles);
  }

}

const thirdPartyApi = new ThirdPartyApi({
  baseUrl: `https://nomoreparties.co/news`
})

export default thirdPartyApi
