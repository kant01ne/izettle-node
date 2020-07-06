import request from 'request';
import Category from './category';
import Discount from './discount';
import Image from './image';
import Import from './import';
import Product from './product';
import Purchase from './purchase';

import merge from 'lodash/merge';

export default class Client {
  constructor(...args) {
    this.clientId = args[0].clientId;
    this.assertionToken = args[0].assertionToken;
    this.organizationUuid = args[0].organizationUuid || 'self';
    this.categories = new Category(this);
    this.discount = new Discount(this);
    this.images = new Image(this);
    this.imports = new Import(this);
    this.purchases = new Purchase(this);
    this.products = new Product(this);
    return this;
  }
  put(baseUrl, endpoint, data, done) {
    return this.request(done,
      {
        method: 'put',
        uri: endpoint,
        body: data,
        baseUrl
      }
    );
  }
  post(baseUrl, endpoint, data, done) {
    return this.request(done,
      {
        method: 'post',
        uri: endpoint,
        body: data,
        baseUrl
      }
    );
  }
  get(baseUrl, endpoint, data, done) {
    return this.request(done,
      {
        method: 'get',
        uri: endpoint,
        qs: data,
        baseUrl
      }
    );
  }
  delete(baseUrl, endpoint, data, done) {
    return this.request(done,
      {
        method: 'delete',
        uri: endpoint,
        qs: data,
        baseUrl
      }
    );
  }
  request(done, args) {
    const defaultArgs = {
      json: true,
      headers: {
        Accept: 'application/json',
        'User-Agent': 'izettle-node-client/1.0.0',
        Authorization: `Bearer ${this.token}`
      }
    };
    const requestArgs = merge({}, defaultArgs, args);
    return request(requestArgs, (err, res) => this.callback(done, err, res));
  }
  callback(done, err, res) {
    if (!done) {
      return;
    }
    if (done.length >= 2) {
      if (err) {
        done(err, null);
      } else {
        done(null, res);
      }
    } else {
      done(res || null);
    }
  }
  refreshToken(done) {
    // If token was already fetched, and if token expiry was not reached, return.
    if (!this.tokenExpiry && this.tokenExpiry < new Date().getTime())
      return done();

    // Otherwise, refresh token.
    const args = {
      method: 'POST',
      baseUrl: 'https://oauth.izettle.com',
      uri: '/token',
      body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&client_id=${this.clientId}&assertion=${this.assertionToken}`,
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    };

    return this.request((err, res) => {
      if (err)
        return done(err);

      this.token = res.body.access_token;
      this.tokenExpiry = new Date().getTime() + res.body.expires_in;
      return done();
    }, args);
  }
}

