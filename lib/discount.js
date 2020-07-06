export default class Discount {
  constructor(client) {
    this.client = client;
    this.baseUrl = 'https://products.izettle.com';
  }
  list(done) {
    return this.client.get(this.baseUrl, `/organizations/${this.client.organizationUuid}/discounts`, {}, done);
  }
  create(data, done) {
    return this.client.post(this.baseUrl, `/organizations/${this.client.organizationUuid}/discounts`, data, done);
  }
  delete(uuid, done) {
    return this.client.delete(this.baseUrl, `/organizations/${this.client.organizationUuid}/discounts/${uuid}`, {}, done);
  }
  update(uuid, data, done) {
    return this.client.put(this.baseUrl, `/organizations/${this.client.organizationUuid}/discounts/${uuid}`, data, done);
  }
  find(uuid, done) {
    return this.client.get(this.baseUrl, `/organizations/${this.client.organizationUuid}/discounts/${uuid}`, {}, done);
  }
}

