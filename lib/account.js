export default class Account {
  constructor(client) {
    this.client = client;
    this.baseUrl = 'https://finance.izettle.com';
  }
  balance(data, done) {
    return this.client.get(this.baseUrl, `/organizations/${this.client.organizationUuid}/accounts/balance`, data, done);
  }
  listTransactions(data, done) {
    return this.client.get(this.baseUrl, `/organizations/${this.client.organizationUuid}/accounts/transactions`, data, done);
  }
}

