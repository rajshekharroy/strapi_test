import type { Schema, Struct } from '@strapi/strapi';

export interface AddressShippingAddress extends Struct.ComponentSchema {
  collectionName: 'components_address_shipping_addresses';
  info: {
    displayName: 'shipping_address';
  };
  attributes: {
    city: Schema.Attribute.String;
    pin_code: Schema.Attribute.String;
    state: Schema.Attribute.String;
    street: Schema.Attribute.String;
  };
}

export interface ItemsItems extends Struct.ComponentSchema {
  collectionName: 'components_items_items';
  info: {
    description: '';
    displayName: 'Items';
  };
  attributes: {
    price_per_unit: Schema.Attribute.Decimal;
    product_id: Schema.Attribute.String;
    product_name: Schema.Attribute.String;
    quantity: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'address.shipping-address': AddressShippingAddress;
      'items.items': ItemsItems;
    }
  }
}
