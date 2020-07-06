export default class History {
  constructor(client) {
    this.client = client;
    this.baseUrl = 'https://inventory.izettle.com';
  }
  find(uuid, data, done) {
    return this.client.get(this.baseUrl, `/organizations/${this.client.organizationUuid}/history/locations/${uuid}`, data, done);
  }
}

