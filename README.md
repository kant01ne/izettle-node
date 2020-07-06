# izettle-node
> Unofficial Node bindings to the Izettle API

## Note

This is an unofficial Node binding wrapper to the Izettle API I've created while working on a project for a client. This wrapper hasn't been heavily tested. **Do not use unless you feel comfortable modifying and contributing to the project**.

## IZettle Documentation

[Official IZettle API Documentation](https://github.com/iZettle/api-documentation)

## Installation

```bash
npm install -s izettle-client
```

## Running the code locally

```bash
gulp babel
```



## Callbacks

```
client.products.list(function (err, d) {
  // err is an error response object, or null
  // d is a successful response object, or null
});
```

## Example Usage

```node
// Create a product
client.products.create({
  "uuid": "UUID v.1",
  "categories": [
    "string"
  ],
  "name": "string",
  "description": "string",
  "imageLookupKeys": "Internal izettle images",
  "presentation": {
    "imageUrl": "Valid HTTPs url: https://image.izettle.com/product/05D_cBJXEeiGxI2rbDxjcw-9gOUgMY7Eei_Lc7IvMxk6g.jpg",
    "backgroundColor": "Color hex",
    "textColor": "Color hex"
  },
  "variants": {
    "uuid": "UUID v.1",
    "name": "string",
    "description": "string",
    "sku": "string",
    "barcode": "string",
    "price": {
      "amount": 0,
      "currencyId": "AED"
    },
    "costPrice": {
      "amount": 0,
      "currencyId": "AED"
    },
    "vatPercentage": 0,
    "options": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "presentation": {
      "imageUrl": "Valid HTTPs url: https://image.izettle.com/product/05D_cBJXEeiGxI2rbDxjcw-9gOUgMY7Eei_Lc7IvMxk6g.jpg",
      "backgroundColor": "Color hex",
      "textColor": "Color hex"
    }
  },
  "externalReference": "string",
  "unitName": "string",
  "vatPercentage": "0 -> 100. If set",
  "online": {
    "status": "ACTIVE",
    "title": "string",
    "description": "string",
    "shipping": {
      "weight": {
        "weight": 2.04,
        "unit": "kg"
      }
    },
    "presentation": {
      "displayImageUrl": "A valid HTTPS URL. For example: https://images.com/product.jpg",
      "additionalImageUrls": [
        "string"
      ],
      "mediaUrls": [
        "string"
      ]
    },
    "seo": {
      "title": "string",
      "metaDescription": "string",
      "slug": "green-tshirt"
    }
  },
  "variantOptionDefinitions": {
    "definitions": [
      {
        "name": "string",
        "properties": [
          {
            "value": "string",
            "imageUrl": "string"
          }
        ]
      }
    ]
  },
  "taxCode": "string",
  "category": {
    "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "string"
  },
  "metadata": {
    "inPos": true,
    "source": {
      "name": "string",
      "external": true
    }
  }
}, callback);

// Update a product
client.products.update('9fdfgf34-3242-9302-b3ec-4sf6f66tafa6', {
  "uuid": "UUID v.1",
  "categories": [
    "string"
  ],
  "name": "string",
  "description": "string",
  "imageLookupKeys": "Internal izettle images",
  "presentation": {
    "imageUrl": "Valid HTTPs url: https://image.izettle.com/product/05D_cBJXEeiGxI2rbDxjcw-9gOUgMY7Eei_Lc7IvMxk6g.jpg",
    "backgroundColor": "Color hex",
    "textColor": "Color hex"
  },
  "variants": {
    "uuid": "UUID v.1",
    "name": "string",
    "description": "string",
    "sku": "string",
    "barcode": "string",
    "price": {
      "amount": 0,
      "currencyId": "AED"
    },
    "costPrice": {
      "amount": 0,
      "currencyId": "AED"
    },
    "vatPercentage": 0,
    "options": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "presentation": {
      "imageUrl": "Valid HTTPs url: https://image.izettle.com/product/05D_cBJXEeiGxI2rbDxjcw-9gOUgMY7Eei_Lc7IvMxk6g.jpg",
      "backgroundColor": "Color hex",
      "textColor": "Color hex"
    }
  },
  "externalReference": "string",
  "unitName": "string",
  "vatPercentage": "0 -> 100. If set",
  "online": {
    "status": "ACTIVE",
    "title": "string",
    "description": "string",
    "shipping": {
      "weight": {
        "weight": 2.04,
        "unit": "kg"
      }
    },
    "presentation": {
      "displayImageUrl": "A valid HTTPS URL. For example: https://images.com/product.jpg",
      "additionalImageUrls": [
        "string"
      ],
      "mediaUrls": [
        "string"
      ]
    },
    "seo": {
      "title": "string",
      "metaDescription": "string",
      "slug": "green-tshirt"
    }
  },
  "variantOptionDefinitions": {
    "definitions": [
      {
        "name": "string",
        "properties": [
          {
            "value": "string",
            "imageUrl": "string"
          }
        ]
      }
    ]
  },
  "taxCode": "string",
  "category": {
    "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "string"
  },
  "metadata": {
    "inPos": true,
    "source": {
      "name": "string",
      "external": true
    }
  }
}, callback);
```


```node
// List purchases, limit 10, sort descending.
client.purchases.list(10, true, callback);
```

```node
// Find discount by uuid
client.discounts.find('3fa85f64-5717-4562-b3fc-2c963f66afa6', callback);

```
