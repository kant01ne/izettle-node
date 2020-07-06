export default class Setting {
  constructor(client) {
    this.client = client;
    this.baseUrl = 'https://inventory.izettle.com';
  }
  list(data, done) {
    return this.client.get(this.baseUrl, `/organizations/${this.client.organizationUuid}/settings`, data, done);
  }
  create(data, done) {
    return this.client.post(this.baseUrl, `/organizations/${this.client.organizationUuid}/settings`, data, done);
  }
  bulkCreate(data, done) {
    return this.client.post(this.baseUrl, `/organizations/${this.client.organizationUuid}/`, data, done);
  }
  update(data, done) {
    return this.client.put(this.baseUrl, `/organizations/${this.client.organizationUuid}/settings`, data, done);
  }
}

