db.createCollection('customer', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'customer',
      required: ['customer_name', 'surname', 'address', 'phone_number', 'order'],
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
          required: ['street', 'address_number', 'floor', 'door', 'postal_code', 'locality', 'province'],
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
            locality: {
              bsonType: 'string'
            },
            province: {
              bsonType: 'string'
            }
          }
        },
        phone_number: {
          bsonType: 'int'
        },
        order: {
          bsonType: 'array',
          items: {
            title: 'object',
            required: ['_id_order', 'date', 'order_type', 'order_product', 'total_price', 'employee'],
            properties: {
              _id_order: {
                bsonType: 'objectId'
              },
              date: {
                bsonType: 'date'
              },
              order_type: {
                enum: delivery_home,
                delivery_shop
              },
              order_product: {
                bsonType: 'array',
                items: {
                  bsonType: 'int'
                }
              },
              total_price: {
                bsonType: 'double'
              },
              employee: {
                bsonType: 'int'
              }
            }
          }
        }
      }
    }
  }
});
db.createCollection('PizzaShop', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'PizzaShop',
      required: ['pizzaShop_name', 'address', 'employee', 'product'],
      properties: {
        pizzaShop_name: {
          bsonType: 'string'
        },
        address: {
          bsonType: 'object',
          title: 'object',
          required: ['street', 'address_number', 'floor', 'door', 'postal_code', 'locality', 'province'],
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
            locality: {
              bsonType: 'string'
            },
            province: {
              bsonType: 'string'
            }
          }
        },
        employee: {
          bsonType: 'array',
          items: {
            title: 'object',
            required: ['_id_employee', 'employee_name', 'surname', 'nif', 'phone_number', 'employee_type'],
            properties: {
              _id_employee: {
                bsonType: 'objectId'
              },
              employee_name: {
                bsonType: 'string'
              },
              surname: {
                bsonType: 'string'
              },
              nif: {
                bsonType: 'string'
              },
              phone_number: {
                bsonType: 'int'
              },
              employee_type: {
                enum: pizza_maker,
                pizza_delivery
              }
            }
          }
        },
        product: {
          bsonType: 'array',
          items: {
            title: 'object',
            required: ['_id_product', 'product_type', 'product_name', 'description', 'price'],
            properties: {
              _id_product: {
                bsonType: 'objectId'
              },
              product_type: {
                enum: ["pizza", "hamburguer", "drink"]
              },
              product_name: {
                bsonType: 'string'
              },
              description: {
                bsonType: 'string'
              },
              image: {
                bsonType: 'string'
              },
              price: {
                bsonType: 'double'
              },
              pizza_category: {
                bsonType: 'object',
                title: 'object',
                required: ['_id_category', 'category_name'],
                properties: {
                  _id_category: {
                    bsonType: 'objectId'
                  },
                  category_name: {
                    bsonType: 'string'
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
