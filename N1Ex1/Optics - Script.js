db.createCollection('provider', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'provider',
      required: ['provider_name', 'address', 'phone_number', 'fax', 'nif', 'brand'],
      properties: {
        provider_name: {
          bsonType: 'string'
        },
        address: {
          bsonType: 'object',
          title: 'object',
          required: ['street', 'address_number', 'postal_code', 'city', 'country'],
          properties: {
            street: {
              bsonType: 'string'
            },
            address_number: {
              bsonType: 'int'
            },
            floor: {
              bsonType: 'int'
            },
            door: {
              bsonType: 'int'
            },
            postal_code: {
              bsonType: 'int'
            },
            city: {
              bsonType: 'string'
            },
            country: {
              bsonType: 'string'
            }
          }
        },
        phone_number: {
          bsonType: 'int'
        },
        fax: {
          bsonType: 'int'
        },
        nif: {
          bsonType: 'string'
        },
        brand: {
          bsonType: 'array',
          items: {
            title: 'object',
            required: ['_id_brand', 'brand_name'],
            properties: {
              _id_brand: {
                bsonType: 'objectId'
              },
              brand_name: {
                bsonType: 'string'
              }
            }
          }
        }
      }
    }
  }
});
db.createCollection('customer', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'customer',
      required: ['customer_name', 'surname', 'address', 'phone_number', 'email', 'register_date'],
      properties: {
        customer_name: {
          bsonType: 'string'
        },
        surname: {
          bsonType: 'string'
        },
        address: {
          bsonType: 'object',
          title: 'object',
          required: ['street', 'address_number', 'postal_code', 'city', 'country'],
          properties: {
            street: {
              bsonType: 'string'
            },
            address_number: {
              bsonType: 'int'
            },
            floor: {
              bsonType: 'int'
            },
            door: {
              bsonType: 'int'
            },
            postal_code: {
              bsonType: 'int'
            },
            city: {
              bsonType: 'string'
            },
            country: {
              bsonType: 'string'
            }
          }
        },
        phone_number: {
          bsonType: 'int'
        },
        email: {
          bsonType: 'string'
        },
        register_date: {
          bsonType: 'date'
        },
        customer_recommend: {
          bsonType: 'int'
        },
        order: {
          bsonType: 'array',
          items: {
            title: 'object',
            required: ['_id_order', 'order_date', 'employee', 'glasses'],
            properties: {
              _id_order: {
                bsonType: 'objectId'
              },
              order_date: {
                bsonType: 'date'
              },
              employee: {
                bsonType: 'object',
                title: 'object',
                required: ['employee_name', 'employee_surname1'],
                properties: {
                  employee_name: {
                    bsonType: 'string'
                  },
                  employee_surname1: {
                    bsonType: 'string'
                  }
                }
              },
              glasses: {
                bsonType: 'array',
                items: {
                  title: 'object',
                  required: ['graduation', 'frame', '_id_brand'],
                  properties: {
                    graduation: {
                      bsonType: 'array',
                      items: {
                        title: 'object',
                        required: ['graduation_R', 'graduation_L'],
                        properties: {
                          graduation_R: {
                            bsonType: 'double'
                          },
                          graduation_L: {
                            bsonType: 'double'
                          }
                        }
                      }
                    },
                    frame: {
                      enum: ["flotant", "pasta", "metal"]
                    },
                    frame_color: {
                      bsonType: 'string'
                    },
                    glass_color: {
                      bsonType: 'string'
                    },
                    price: {
                      bsonType: 'double'
                    },
                    _id_brand: {
                      bsonType: 'objectId'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});
