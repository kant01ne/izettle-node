export default class Payout {
  constructor(client) {
    this.client = client;
    this.baseUrl = 'https://finance.izettle.com';
  }
  get(data, done) {
    return this.client.get(this.baseUrl, `/organizations/${this.client.organizationUuid}/payout-info`, data, done);
  }
}

