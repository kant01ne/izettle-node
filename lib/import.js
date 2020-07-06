export default class Category {
  constructor(client) {
    this.client = client;
    this.baseUrl = 'https://products.izettle.com';
  }
  list(done) {
    return this.client.get(this.baseUrl, `/organizations/${this.client.organizationUuid}/import/status`, {}, done);
  }
  find(uuid, done) {
    return this.client.get(this.baseUrl, `/organizations/${this.client.organizationUuid}/import/status/${uuid}`, {}, done);
  }
  bulkCreate(data, done) {
    return this.client.get(this.baseUrl, `/organizations/${this.client.organizationUuid}/import/v2`, data, done);
  }
}

