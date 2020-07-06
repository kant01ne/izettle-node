export default class Purchase {
  constructor(client) {
    this.client = client;
    this.baseUrl = 'https://purchase.izettle.com';
  }
  list(limit, descending, done) {
    return this.client.get(this.baseUrl, `/purchases/v2?limit=${limit}&descending=${descending}`, {}, done);
  }
  find(uuid, done) {
    return this.client.get(this.baseUrl, `/purchase/v2/${uuid}`, {}, done);
  }
}

