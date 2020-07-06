export default class Location {
  constructor(client) {
    this.client = client;
    this.baseUrl = 'https://inventory.izettle.com';
  }
  list(data, done) {
    return this.client.get(this.baseUrl, `/organizations/${this.client.organizationUuid}/locations`, data, done);
  }
  create(data, done) {
    return this.client.post(this.baseUrl, `/organizations/${this.client.organizationUuid}/locations/add`, data, done);
  }
  bulkCreate(data, done) {
    return this.client.post(this.baseUrl, `/organizations/${this.client.organizationUuid}/locations`, data, done);
  }
  update(uuid, data, done) {
    return this.client.put(this.baseUrl, `/organizations/${this.client.organizationUuid}/locations/${uuid}`, data, done);
  }
  template(done) {
    return this.client.get(this.baseUrl, `/organizations/${this.client.organizationUuid}/locations/template`, {}, done);
  }
}

