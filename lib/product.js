export default class Product {
  constructor(client) {
    this.client = client;
    this.baseUrl = 'https://products.izettle.com';
  }
  /*
   * Products
   */
  list(data, done) {
    return this.client.get(this.baseUrl, `/organizations/${this.client.organizationUuid}/products/v2`, data, done);
  }
  create(data, done) {
    return this.client.post(this.baseUrl, `/organizations/${this.client.organizationUuid}/products`, data, done);
  }
  bulkDelete(data, done) {
    return this.client.delete(this.baseUrl, `/organizations/${this.client.organizationUuid}/products`, data, done);
  }
  delete(uuid, done) {
    return this.client.delete(this.baseUrl, `/organizations/${this.client.organizationUuid}/products/${uuid}`, {}, done);
  }
  update(uuid, data, done) {
    return this.client.put(this.baseUrl, `/organizations/${this.client.organizationUuid}/products/v2/${uuid}`, data, done);
  }
  find(uuid, done) {
    return this.client.get(this.baseUrl, `/organizations/${this.client.organizationUuid}/products/${uuid}`, {}, done);
  }
  count(done) {
    return this.client.get(this.baseUrl, `/organizations/${this.client.organizationUuid}/products/v2`, {}, done);
  }

  /*
   * ProductsOnline.
   */
  active(done) {
    return this.client.post(this.baseUrl, `/organizations/${this.client.organizationUuid}/products/online/migrate`, {}, done);
  }
  createSlug(data, done) {
    return this.client.post(this.baseUrl, `/organizations/${this.client.organizationUuid}/products/online/slug`, data, done);
  }

  /*
   * ProductsOptions
   */
  options(done) {
    return this.client.get(this.baseUrl, `/organizations/${this.client.organizationUuid}/products/options`, {}, done);
  }
}

