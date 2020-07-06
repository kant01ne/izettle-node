export default class Inventory {
  constructor(client) {
    this.client = client;
    this.baseUrl = 'https://inventory.izettle.com';
  }
  list(data, done) {
    return this.client.get(this.baseUrl, `/organizations/${this.client.organizationUuid}/inventory/locations`, data, done);
  }
  create(data, done) {
    return this.client.post(this.baseUrl, `/organizations/${this.client.organizationUuid}/inventory`, data, done);
  }
  bulkCreate(data, done) {
    return this.client.post(this.baseUrl, `/organizations/${this.client.organizationUuid}/v2/inventory/bulk`, data, done);
  }
  deleteProduct(productUuid, done) {
    return this.client.delete(this.baseUrl, `/organizations/${this.client.organizationUuid}/inventory/products/${productUuid}`, {}, done);
  }
  update(data, done) {
    return this.client.put(this.baseUrl, `/organizations/${this.client.organizationUuid}/inventory`, data, done);
  }
  find(uuid, done) {
    return this.client.get(this.baseUrl, `/organizations/${this.client.organizationUuid}/inventory/locations/${uuid}`, {}, done);
  }
  findProduct(uuid, productUuid, done) {
    return this.client.get(this.baseUrl, `/organizations/${this.client.organizationUuid}/inventory/locations/${uuid}/products/${productUuid}`, {}, done);
  }
  addProducts(uuid, data, done) {
    return this.client.get(this.baseUrl, `/organizations/${this.client.organizationUuid}/inventory/products`, data, done);
  }
}

